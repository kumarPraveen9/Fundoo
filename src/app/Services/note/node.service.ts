import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  token : any;
  constructor (private httpService : HttpService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

 addnote(reqData : any){
    console.log("addnote:",reqData)
    console.log(this.token);
   let header = {
     headers:new HttpHeaders({
       'Content-type':'application/json',
        'Authorization':'C4zFXUy6rBDSedLOFvI6GlqT4NAzCfH5dt5b6r7InKssQ5E4mz7StIzStIiHNPnB'
     })
   }
   return this.httpService.postService('notes/addNotes', reqData, true, header);
 }

 getallnotes(){
  console.log("get note :");
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': 'C4zFXUy6rBDSedLOFvI6GlqT4NAzCfH5dt5b6r7InKssQ5E4mz7StIzStIiHNPnB'
    })
  }
  return this.httpService.getService('notes/getNotesList',true,header);
}

 




}


