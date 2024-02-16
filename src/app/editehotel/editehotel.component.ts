import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../model/Hotel';
import { HotelserviceService } from '../Services/hotelservice.service';

@Component({
  selector: 'app-editehotel',
  templateUrl: './editehotel.component.html',
  styleUrls: ['./editehotel.component.css']
})
export class EditehotelComponent implements OnInit {
@Input() data!:Hotel;
  constructor(private service:HotelserviceService) { }

  ngOnInit(): void {
  }
  saveEdite( ){
    this.service.Editehotel(this.data).subscribe(
      { next:(data:any)=>{ 
        location.reload();
      },
      error: (err:any)=>{ 
        console.error(err.message);
      }
        
      }
    )

   }
}
