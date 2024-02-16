import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean=false;

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  if(this.service.isLoggedIn())
  this.logged=true;
}

logout(){ 
this.service.logout()}

}
