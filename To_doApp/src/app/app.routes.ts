import { Routes } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{SignupComponent} from './signup/signup.component';
import{CreateComponent} from './create/create.component';
import{ListComponent} from './list/list.component';
import{PreviousComponent} from './previous/previous.component';         

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'create',component:CreateComponent},
    {path:'list',component:ListComponent},
    {path:'previous',component:PreviousComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'}
];
