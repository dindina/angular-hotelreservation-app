import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private api_url = "http://localhost:3001/reservations"
  private reservations: Reservation[] = [];

  constructor(private httpClient: HttpClient){

  }

  getReservations() : Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(this.api_url)
  }

  getReservation(id: string) : Observable<Reservation>{
    return this.httpClient.get<Reservation>(this.api_url +"/"+id)
  }

  saveReservation(reservation :Reservation) : Observable<void>{

  return this.httpClient.post<void>(this.api_url,reservation);

  }

  deleteReservation(id: string) : Observable<void>{

    return this.httpClient.delete<void>(this.api_url +"/"+id)

  }

  updateReservation(id: string, updatedReservation: Reservation) : Observable<void>{
    return this.httpClient.put<void>(this.api_url+"/"+id,updatedReservation);

  }

}
