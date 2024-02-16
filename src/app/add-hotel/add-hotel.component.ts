import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelserviceService } from '../Services/hotelservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  hotelFormgroup!: FormGroup;
  constructor(private fb: FormBuilder,private router :Router, private service:HotelserviceService) { }

  ngOnInit(): void {
    this.hotelFormgroup = this.fb.group({
      hotelname: this.fb.control("", Validators.required),
      adress: this.fb.control("", Validators.required),
      price: this.fb.control("", Validators.required)
    })}
  Savehotell(){
   this.service.Savehotel(this.hotelFormgroup.value).subscribe(
    { next :(data:any)=>{
      location.reload();  
     },
     error:(err)=>{alert( "Error" + err.message + "/n" +  this.hotelFormgroup.value)}
    }
   )
   }

}
