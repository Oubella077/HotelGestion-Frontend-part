import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {
  hotel: any;
  @Input() state!: any[];
  constructor() { }

  ngOnInit(): void {
    this.hotel=history.state.data;
  }

}
