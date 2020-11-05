import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {ProductComponent} from './components/product/product.component'
import {ForumComponent} from './components/forum/forum.component'
import {ManageCropsComponent} from './components/manage-crops/manage-crops.component'
import {ScheduleComponent} from './components/schedule/schedule.component'
import {LoginComponent} from './components/login/login.component'
import {RegisterComponent} from './components/register/register.component'
const routes: Routes = [
	{path:'',component:HomeComponent},
	{path:'login',component:LoginComponent},
	{path:'register',component:RegisterComponent},
  	{path:'products',component:ProductComponent},
  	{path:'schedules', component: ScheduleComponent },
  	{path:'forum',component:ForumComponent},
  	{path:'manage-crops',component:ManageCropsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


