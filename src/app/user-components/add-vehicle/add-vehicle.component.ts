import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-register-loguer.service';
import { Vehicle } from '../../models/vehicle';
import { randomUUID } from 'crypto';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent {

  newVehicle = new FormGroup({
    type: new FormControl(""),
    patent: new FormControl("",[Validators.minLength(6), Validators.required, Validators.pattern(/^([a-zA-Z]{3}[0-9]+|[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2})$/)]),
    kilometres: new FormControl(0,[Validators.pattern(/^[0-9]+$/),Validators.required]),
    model: new FormControl("", [Validators.required])
  })

  message = "";

  constructor(private userService:UserService){}

  
  chargeVehicle(){
    const type = this.newVehicle.get("type")?.value;
    const patent = this.newVehicle.get("patent")?.value;
    const kilometres = this.newVehicle.get("kilometres")?.value;
    const model = this.newVehicle.get("model")?.value;
    
    if(type != null && patent != null && kilometres != null && model != null){
      const vehicle = new Vehicle(crypto.randomUUID(),type,patent,kilometres,model,true);
      this.userService.chargeVehicle(vehicle).subscribe({
        next:(response)=>{
          this.message = "Vehiculo cargado con éxito";
        },
        error:(err)=>{
          this.message = err.message;
          console.error(err);
        }
      });
    }
    
  }
}
