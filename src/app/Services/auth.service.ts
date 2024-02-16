import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host =environment.host;
  user: User={ }as User;
  access_token: any;
  constructor(private http:HttpClient,private router:Router) { }
  public login(u:User):Observable<any> {
    let head = { headers: new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded") }
    let param=new  HttpParams().set("fullname",u.fullname)
                               .set("password",u.password)  
    return this.http.post<any>(this.host+ "/login",param,head);
   }
   loadeprofile( ) {
    // localStorage.setItem('access_token',JSON.stringify(data));
    console.log(" My User data ****")
    this.access_token =localStorage.getItem('access_Token');
    console.log(this.access_token + " My data *********************")
    let jwtdecode: any = jwtDecode(this.access_token);
    this.user.fullname = jwtdecode.sub;
    this.user.roles = jwtdecode.roles;
    this.user.UserId=jwtdecode.userId;
    // this.user.isAuthanticated = true;
    localStorage.setItem('user', JSON.stringify(this.user));
    console.log(this.access_token + "*****" + this.user.fullname + "*****" + this.user.roles)
  }
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_Token');
    return authToken !== null ? true : false;
    // return this.user.isAuthanticated;
  }
  logout() {
    localStorage.removeItem('access_Token');
    localStorage.clear();
    this.user!= undefined;
    this.router.navigateByUrl('/');
    location.reload();}
  
}
