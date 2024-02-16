import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../Services/hotelservice.service';
import { AuthService } from '../Services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: any;
  access: any;

  constructor(private service:AuthService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginFormGroup=this.fb.group(
      {fullname: this.fb.control(null, Validators.required),
       password: this.fb.control(null, Validators.required), }
   )}
   
Login(){ 
  let u:User=this.loginFormGroup.value;
  this.service.login(u).subscribe({ 
  next:(data)=>{
    this.access=data;
      // this.service.loadeprofile(data);
      localStorage.setItem('access_Token', JSON.stringify(this.access));        
          this.router.navigateByUrl('/');
          location.reload();       
   },
  error:(err)=>{alert("Error in loging Information :  " + err.status) }
  })
}

}
