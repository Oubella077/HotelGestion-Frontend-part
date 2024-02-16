import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HeaderComponent } from './header/header.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditehotelComponent } from './editehotel/editehotel.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeaderComponent,
    IllustrationComponent,
    HotelInfoComponent,
    AddHotelComponent,
    EditehotelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
