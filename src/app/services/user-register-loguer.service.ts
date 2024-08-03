import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, last } from 'rxjs';
import { Rol } from '../models/rol';
import { json } from 'stream/consumers';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userLoguer: User = new User("","","","",0,"", false);
    token = "";
    private apiUrl = "http://localhost:8080"
    httpClient = inject(HttpClient)
    private headers = new HttpHeaders({"Content-Type": "application/json"}); //Header de todos tienen acceso
    httpOptions = {  //Pasar a las apis que necesitan un rol
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
      };

    register(user:Object):Observable<any>{ 
        return this.httpClient.post<any>(`${this.apiUrl}/api/users`, user,{headers:this.headers});
    }

    login(email:string, password:string):Observable<any>{
       
        const loginData = {
            email: email,
            password: password
        };
        return this.httpClient.post(`${this.apiUrl}/login`, loginData,{headers:this.headers});
    }

    saveToken(token:string){
        this.token = token;
        this.httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
    }

    searchUser(email:string):Observable<any>{
        return this.httpClient.get(`${this.apiUrl}/api/users/email/${email}`);
    }

    saveUser(email:string){
        this.searchUser(email).subscribe(
            {next:(response)=>{
                 const rol = new Rol(response.roles[0].id,response.roles[0].name);
                 response.vehicles.forEach((vehicle:any)=>{
                    const newVehicle = new Vehicle(vehicle.id, vehicle.type,vehicle.patent, vehicle.kilometres, vehicle.model,vehicle.enabled);
                    this.userLoguer.setVehicle(newVehicle);  
                 })
                  this.userLoguer.setId(response.id);
                  this.userLoguer.setName(response.name);
                  this.userLoguer.setLastname(response.lastname);
                  this.userLoguer.setDni(response.dni);
                  this.userLoguer.setAge(response.age);
                  this.userLoguer.setEmail(response.email);
                  this.userLoguer.setEnabled(response.enabled);
                  this.userLoguer.setRol(rol);
                },
                error:(err)=>{
                    console.log(err);
                }
            }
        );
    }

    editName(name:string){
        this.userLoguer.setName(name);
        return this.httpClient.get<any>(`${this.apiUrl}/api/users/changeName/${this.userLoguer.getDni}/${name}`,this.httpOptions);
    }
    
    editLastname(lastname:string){
        this.userLoguer.setLastname(lastname);
        return this.httpClient.get<any>(`${this.apiUrl}/api/users/changeLastname/${this.userLoguer.getDni}/${lastname}`,this.httpOptions);
    }
   
    editEmail(email:string){
        this.userLoguer.setEmail(email);
        return this.httpClient.get<any>(`${this.apiUrl}/api/users/changeEmail/${this.userLoguer.getDni}/${email}`,this.httpOptions);
    }
    
    editAge(age:number){
        this.userLoguer.setAge(age);
        return this.httpClient.get<any>(`${this.apiUrl}/api/users/changeAge/${this.userLoguer.getDni}/${age}`,this.httpOptions);
    }

    editPassword(password:string){
        return this.httpClient.get<any>(`${this.apiUrl}/api/users/changePassword/${this.userLoguer.getDni}/${password}`,this.httpOptions);
    }

    viewUsers(){
        return this.httpClient.get<any[]>(`${this.apiUrl}/api/users`, this.httpOptions);
    }

    chargeVehicle(vehicle:Vehicle){
        return this.httpClient.put<any>(`${this.apiUrl}/api/users/add/vehicle/${this.userLoguer.getDni}`,vehicle,this.httpOptions);
    }

}
