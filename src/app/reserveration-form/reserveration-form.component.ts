import { Component , OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-reserveration-form',
  templateUrl: './reserveration-form.component.html',
  styleUrls: ['./reserveration-form.component.css']
})
export class ReserverationFormComponent implements OnInit{

  reservationForm : FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder
    , private  service : ReservationService
    , private router : Router
    , private activatedRoute : ActivatedRoute
    ){}
  ngOnInit(): void {

    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]

    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.service.getReservation(id).subscribe(reservation =>{
        if(reservation){
        this.reservationForm.patchValue(reservation)
      }
      })


    }

  }



  onSubmit(){

    if(this.reservationForm.valid){

      let reservation:Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')
      if(id){

        this.service.updateReservation(id,reservation).subscribe(res =>{
          console.log("updated successful")
        })
      }
      else{
        this.service.saveReservation(reservation).subscribe(res =>{
          console.log("saved successful")
        })
      }


      this.router.navigate(['/reservation/list'])

    }else{
      alert("invalid")
    }
  }
}
