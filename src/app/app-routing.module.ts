import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MainComponent } from './components/main/main.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //default
    redirectTo: 'main'
  },
  {path:'second-page',component:SecondPageComponent },
  {path:'main',component:MainComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'capsules',component:CapsulesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
