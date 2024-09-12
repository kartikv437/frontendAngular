import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LendingComponent } from './components/lending/lending.component';

const routes: Routes = [
  {path:'', redirectTo:'/',pathMatch:'prefix'},
  {path:'',component:LendingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
