import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-register-loguer.service';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-user-view-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './user-view-vehicle.component.html',
  styleUrl: './user-view-vehicle.component.css'
})
export class UserViewVehicleComponent implements OnInit{
  
  vehicles:Vehicle[] = [];
  
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.userLoguer.getVehicles.forEach(vehicle=>{
      console.log("Dentro del primer forEach" + vehicle.getModel);
      this.vehicles.push(vehicle);
    })
  }
  

}
