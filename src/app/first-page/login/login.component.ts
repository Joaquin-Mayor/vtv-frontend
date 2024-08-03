import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { UserService } from '../../services/user-register-loguer.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  logueo = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("",[Validators.required, Validators.minLength(1)])
  });
  message = "";

  constructor(private loginService : UserService, private router:Router){}

    login(){
        
      this.loginService.login(this.logueo.get("email")?.value || "", this.logueo.get("password")?.value || "")
      .subscribe({next: (response) =>{
            this.message = response.message;
            this.loginService.saveToken(response.token);
            this.loginService.saveUser(response.email);
            console.log(this.loginService.userLoguer);
        },
        error: (e)=>{
          this.message = e.message
        }
    });
    }

    edit(){
      this.router.navigate(["/edit"]);
    }

    chargeVehicle(){
      this.router.navigate(["/chargeVehicle"])
    }

    viewVehicle(){
      this.router.navigate(["/viewVehicle"])
    }
  
}
