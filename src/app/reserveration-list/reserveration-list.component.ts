import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';


@Component({
  selector: 'app-reserveration-list',
  templateUrl: './reserveration-list.component.html',
  styleUrls: ['./reserveration-list.component.css']
})
export class ReserverationListComponent implements OnInit{

  reservations : Reservation[] = [];

  constructor(private service:ReservationService){

  }
  ngOnInit(): void {
    this.service.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  deleteRservation(id:string){
    this.service.deleteReservation(id).subscribe(() =>{
      console.log("delete successful")
    })
  }


}
