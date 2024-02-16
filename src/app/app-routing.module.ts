import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'hotels' ,      component:HotelsComponent },
  {path:'hotel/view' ,      component:HotelInfoComponent },
  {path:'hotel/AddHotel' ,      component:AddHotelComponent },
  // {path:'login' ,      component:LoginComponent },


  {path:"**", redirectTo:"hotels", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
