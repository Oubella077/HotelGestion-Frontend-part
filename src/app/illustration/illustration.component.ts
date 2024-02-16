import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelserviceService } from '../Services/hotelservice.service';
import { Hotel } from '../model/Hotel';
@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {
ReserveGroup!:FormGroup;

  searchaction:Boolean=false;
@Output() selectevalue = new EventEmitter();
constructor(private fb:FormBuilder,private service:HotelserviceService) { }
  ngOnInit(): void {
    this.ReserveGroup=this.fb.group(
      
     {  adress:this.fb.control("",Validators.required),
        date_arrive:this.fb.control("",Validators.required),
        date_depart:this.fb.control("",Validators.required) }
         )
        }
detecteChange(){ 
  this.selectevalue.emit(this.ReserveGroup);
  console.log("illustration c" + this.ReserveGroup.value);
}

}
