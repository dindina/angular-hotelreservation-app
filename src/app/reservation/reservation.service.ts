import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
//import {ngOnInit} from

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  constructor(){
    let saved = localStorage.getItem("reservations")
    this.reservations = saved  ? JSON.parse(saved) : []
  }

  getReservations() : Reservation[]{
    return this.reservations;
  }

  getReservation(id: string) : Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  saveReservation(reservation :Reservation) : void{

   reservation.id = new Date().toISOString();
   console.log("new " + JSON.stringify(reservation))
   this.reservations.push(reservation)
   localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

  deleteReservation(id: string) : void{
    let index = this.reservations.findIndex(res => res.id === id);
    console.log("index-deleted", index)
    console.log("id-deleted", id)
    this.reservations.splice(index,1)
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

  updateReservation(id: string, updatedReservationId: Reservation) : void{
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservationId;
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

}
