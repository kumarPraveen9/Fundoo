import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : any;
  constructor (private httpService : HttpService) {
    this.token = localStorage.getItem('token');
  }

 registration(reqData : any){
    console.log(reqData)
   let header = {
     headers:new HttpHeaders({
       'Content-type':'application/json',
       // 'Authorization':'token'
     })
   }
   return this.httpService.postService('user/userSignUp', reqData, false, header);
 }

 login(reqData : any){
    console.log(reqData)
   let header = {
     header:new HttpHeaders({
       'Content-type':'application/json',
       // 'Authorization':'token'
     })
   }
   return this.httpService.postService('user/login', reqData, false, header);
 }

 forgotPassword(reqData : any){
    console.log(reqData)
   let header = {
     header:new HttpHeaders({
       'Content-type':'application/json',
       // 'Authorization':'token'
     })
   }
   return this.httpService.postService('user/reset', reqData, false, header);
 }

 resetPassword(reqData : any, token:any){
   console.log(reqData)
   let headersOptions = {
     headers:new HttpHeaders({
       'Content-type':'application/json',
        'Authorization':`Bearer ${token}`
     })
   }
   return this.httpService.postService('user/reset-password', reqData, true, headersOptions);
 }
}
