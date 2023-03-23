import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
constructor(private httpClient: HttpClient) { }

postService(url: string, reqData: any, token: boolean, httpOptions: any) {
  return this.httpClient.post(this.baseurl + url, reqData, token && httpOptions);
}

putService(url : string, reqData: any,  tokenRequired: boolean , httpOptions: any){ 
  return this.httpClient.put(this.baseurl + url, reqData, tokenRequired && httpOptions);
 }

 getService(url : string, tokenRequired : boolean, httpOptions : any ){
    
  return this.httpClient.get(this.baseurl+url,tokenRequired && httpOptions)
}
}
