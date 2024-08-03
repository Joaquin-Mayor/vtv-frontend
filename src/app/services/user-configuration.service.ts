import { Injectable } from "@angular/core";
import { UserService } from "./user-register-loguer.service";

@Injectable({
    providedIn: 'root'
  })
  export class UserConfigurationService {

    
    constructor(private userLoguerService:UserService){}
  }