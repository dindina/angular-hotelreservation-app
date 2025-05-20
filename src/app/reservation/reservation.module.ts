import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserverationFormComponent } from '../reserveration-form/reserveration-form.component';
import { ReserverationListComponent } from '../reserveration-list/reserveration-list.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    ReserverationFormComponent,
    ReserverationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class ReservationModule { }
