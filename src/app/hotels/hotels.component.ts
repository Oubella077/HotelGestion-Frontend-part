import { Component, OnInit, Output } from '@angular/core';
import { HotelserviceService } from '../Services/hotelservice.service';
import { Hotel } from '../model/Hotel';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
public hotels!:Hotel[];
public hotel!:Hotel;
hotels1!: Hotel[];
@Output() action!:Boolean;
@Output() hotels2!:Hotel;
  edite!: boolean;
  constructor(private service:HotelserviceService, private service1:AuthService) { }

  ngOnInit(): void {
    if(this.service1.isLoggedIn())
     this.service1.loadeprofile();
    this.getproducts();
  }
  getproducts() { 
    this.service.gethotels().subscribe( {
      next:(data:any)=>{ 
        this.hotels=data;
         this.hotels1=data;
      },
      error :(err: { message: any; })=>{console.log(err.message)}
    })
    }
  Delete(id:number) {
      this.service.Deletehotel(id).subscribe({
        next :(data:any)=>{
          this.getproducts();},
        error:(err:any )=> {console.log(err.message)}
    } )  
  }
  selectitem(item:Hotel){ 
    this.hotel=item;
  }
  public favorit(p:Hotel){
    if(p.isFavorite){
    p.isFavorite=false;
     return;}
    p.isFavorite=true;
    // this.service.setfavorite(p).subscribe( { 
    //   next :(data:any)=>{ p.isFavorite=!promo;},
    //   error :( err) =>{this.errormessage=err; } 
    //  }  
    // )
  }
  filter(event:any) {
    this.hotels1=this.hotels.filter(p=>p.adress.includes(event.value.adress));
    console.log("hotel c" + event.value.adress);
  }
}
