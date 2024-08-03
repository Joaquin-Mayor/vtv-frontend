import { last } from "rxjs";
import { Vehicle } from "./vehicle";
import { Rol } from "./rol";

export class User{

    private id: string;
    private name: string;
    private lastname: string;
    private dni:string;
    private age:number;
    private email:string;
    private enabled:boolean;
    private rol:Rol[] = [];
    private vehicles: Vehicle[] = [];

    constructor(id:string,name:string,lastname:string,dni:string,age:number,email:string,enabled:boolean){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.dni = dni;
        this.age = age;
        this.email = email;
        this.enabled = enabled;
    }

    public setId(id:string){
        this.id = id;
    }

    public setName(name:string){
        this.name = name;
    }

    public setLastname(lastname:string){
        this.lastname = lastname;
    }

    public setDni(dni:string){
        this.dni = dni;
    }

    public setAge(age:number){
        this.age = age;
    }

    public setEmail(email:string){
        this.email = email;
    }


    public setEnabled(enabled:boolean){
        this.enabled = enabled;
    }

    public setRol(rol:Rol){
        this.rol.push(rol);
    }

    public setVehicle(vehicle:Vehicle){
        this.vehicles.push(vehicle);
    }

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }

    get getLastname(){
        return this.lastname;
    }

    get getDni(){
        return this.dni;
    }

    get getAge(){
        return this.age;
    }

    get getEmail(){
        return this.email;
    }

    get getEnabled(){
        return this.enabled;
    }

    get getRol(){
        return this.rol;
    }


    getOneVehicle(patent:string){
        return this.vehicles.find(vehicle=> {
            return vehicle.getPatent === patent;
        })
    }

    get getVehicles(){
        return this.vehicles;
    }

    

}