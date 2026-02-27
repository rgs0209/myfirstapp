import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

console.log('this is my app module');

const routes: Routes = [

{path:'first',component:FirstComponent},
{path:'second',component:SecondComponent},
{ path:'auth',loadChildren:() =>import('./auth/auth.module').then(m => m.AuthModule)}  //lazy loading by seeing loadchildren

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
