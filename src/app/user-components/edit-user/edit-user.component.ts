import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-register-loguer.service';
import { User } from '../../models/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  
    editName = false;
    editLastname = false;
    editAge = false;
    editEmail = false;
    editPassword = false;
    user:User = new User("","","","",0, "",false);
    message = "";

    users:User[] = [];


    newUserDate = new FormGroup({
      name: new FormControl("",[ Validators.minLength(2), Validators.nullValidator,Validators.required]),
      lastname: new FormControl("", [Validators.minLength(2), Validators.required]),
      age: new FormControl(0,[Validators.pattern(/^[0-9]+$/), Validators.min(18),Validators.required]),
      email: new FormControl("",[Validators.email,Validators.required]),
      password: new FormControl("",[Validators.minLength(7),Validators.required])
    })

    constructor(private loguerUser:UserService){}
  ngOnInit(): void {
     this.user = this.loguerUser.userLoguer

  }

    btnName(){

      if(this.editName == false){
        this.editName = true;
      }else{
        this.editName = false;
      }
    }

    btnLastname(){

      if(this.editLastname == false){
        this.editLastname = true;
      }else{
        this.editLastname = false;
      }
    }

    btnAge(){

      if(this.editAge == false){
        this.editAge = true;
      }else{
        this.editAge = false;
      }
    }

    btnEmail(){

      if(this.editEmail == false){
        this.editEmail = true;
      }else{
        this.editEmail = false;
      }
    }

    btnPassword(){

      if(this.editPassword == false){
        this.editPassword = true;
      }else{
        this.editPassword = false;
      }
    }

   

    modifyName(){
      const name = this.newUserDate.get("name")?.value;
      if(typeof name === "string" && name.trim() !== ""){
        this.loguerUser.editName(name).subscribe(
          {next:(response) =>{
            this.message = "Nombre actualizado"
          },
          error: (e)=>{
            console.error(e);
            this.message = e.message;
          }}
        );
      }
    }

    modifyLastname(){
      const lastname = this.newUserDate.get("lastname")?.value;
      if(typeof lastname === "string" && lastname.trim() !== ""){
        this.loguerUser.editLastname(lastname).subscribe(
          {next:(response) =>{
            this.message = "Apellido Actualizado"
          },
          error: (e)=>{
            this.message = e.message;
          }}
        );
      }
    }

    modifyEmail(){
      const email = this.newUserDate.get("email")?.value;
      if(typeof email === "string" && email.trim() !== ""){
        this.loguerUser.editEmail(email).subscribe(
          {next:(response) =>{
            this.message = "Email Actualizado"
          },
          error: (e)=>{
            this.message = e.message;
          }}
        );
      }
    }

    modifyAge(){
      const age = this.newUserDate.get("age")?.value;
      if(typeof age === "number"){
        this.loguerUser.editAge(age).subscribe(
          {next:(response) =>{
            this.message = "Edad Actualizada"
          },
          error: (e)=>{
            this.message = e.message;
          }}
        );
      }
    }

    modifyPassword(){
      const password = this.newUserDate.get("password")?.value;
      if(typeof password === "string" && password.trim() !== ""){
        this.loguerUser.editPassword(password).subscribe(
          {next:(response) =>{
            this.message = "Contraseña cambiada"
          },
          error: (e)=>{
            this.message = e.message;
          }}
        );
      }
    }


    viewUsers(){
      this.loguerUser.viewUsers().subscribe(
        {next:(response)=>{
          response.forEach(element => {
            this.users.push(new User(element.id, element.name, element.lastname, element.dni, element.age, element.email,element.enabled));
          });
        },
        error: (e)=>{
          console.log(e);
          this.message = e.message;
        }
      }
      )
    }
}
