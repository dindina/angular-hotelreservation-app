import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReserverationFormComponent } from './reserveration-form/reserveration-form.component';
import { ReserverationListComponent } from './reserveration-list/reserveration-list.component';

const routes: Routes = [
  {path :"" , component:HomeComponent},
  {path :"reservation/new" , component:ReserverationFormComponent},
  {path :"reservation/list" , component:ReserverationListComponent},
  {path :"reservation/edit/:id" , component:ReserverationFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
