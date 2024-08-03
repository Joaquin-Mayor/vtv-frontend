import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserService } from '../../services/user-register-loguer.service';
import { User } from '../../models/user';
import { HttpResponse } from '@angular/common/http';
import { Rol } from '../../models/rol';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newUser = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(2), Validators.nullValidator]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    dni: new FormControl("",[Validators.required, Validators.minLength(6), Validators.pattern(/^[0-9]+$/)]),
    age: new FormControl(0,[Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(18)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required, Validators.minLength(7)])
  })

  message:string  = "";
  errorsMessages:any[] = [];
  otro:any;

  constructor(private userLogerRegisterService: UserService){}

  register(){

      const nameF = this.newUser.get("name")?.value;
      const lastnameF = this.newUser.get("lastname")?.value
      const dniF = this.newUser.get("dni")?.value
      const ageF = this.newUser.get("age")?.value
      const emailF = this.newUser.get("email")?.value
      const passwordF = this.newUser.get("password")?.value
      if(nameF!=null && lastnameF != null && dniF != null && ageF != null && emailF != null && passwordF != null){
        const rolF = new Rol(2,"ROLE_USER")
        const user = {id:crypto.randomUUID(), 
        name:nameF,
        lastname:lastnameF,
        dni:dniF,
        age:ageF,
        email:emailF,
        password:passwordF,
        enabled:true,
        rol:rolF
      }
       
        this.userLogerRegisterService.register(user).subscribe(
          (response:HttpResponse<any>)=>{
            if(response.status == 201){
              this.message = "Usuario creado con éxito";
            }else{
                this.message = "Lo sentimos ocurrio un error";
                const errors = response.body;
                this.errorsMessages = Object.values(errors)
            }
          }
        );
      }
     
      
  }
}
