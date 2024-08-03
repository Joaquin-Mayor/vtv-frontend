import { Routes } from '@angular/router';
import { LoginComponent } from './first-page/login/login.component';
import { RegisterComponent } from './first-page/register/register.component';
import { WelcomePageComponent } from './first-page/welcome-page/welcome-page.component';
import { EditUserComponent } from './user-components/edit-user/edit-user.component';
import { AddVehicleComponent } from './user-components/add-vehicle/add-vehicle.component';
import { UserViewVehicleComponent } from './user-components/user-view-vehicle/user-view-vehicle.component';

export const routes: Routes = [
    {
        path:"",
        component: WelcomePageComponent,  
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"log",
        component:LoginComponent
    },
    {
        path:"edit",
        component:EditUserComponent
    },
    {
        path:"chargeVehicle",
        component:AddVehicleComponent
    },
    {
        path:"viewVehicle",
        component:UserViewVehicleComponent
    }
];
