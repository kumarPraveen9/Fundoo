import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  addnote(reqData: any) {
    console.log('addnote:', reqData);
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.postService(
      'notes/addNotes',
      reqData,
      true,
      header
    );
  }

  getallnotes() {
    console.log('get note :');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getService('notes/getNotesList', true, header);
  }

  getallTrashnotes() {
    console.log('get trash notes :');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getService('notes/getTrashNotesList', true, header);
  }

  getallArchivenotes() {
    console.log('get archive notes :');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getService('notes/getArchiveNotesList', true, header);
  }

  getallremindernotes() {
    console.log('get reminder notes :');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getService('notes/getReminderNotesList', true, header);
  }


  trashnotes(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.postService(
      'notes/trashNotes',
      reqData,
      true,
      header
    );
  }

  updatenotes(reqdata: any, noteID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.postService(
      'notes/updateNotes',
      reqdata,
      true,
      header
    );
  }

  archivenotes(reqdata: any){
    

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':  this.token
      })
    }
    return this.httpService.postService('notes/archiveNotes',reqdata,true,header)
  }
  remindnotes(reqdata: any){
    

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':  this.token
      })
    }
    return this.httpService.postService('notes/addUpdateReminderNotes',reqdata,true,header)
  }

  notesColor(reqdata: any){
    

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':  this.token
      })
    }
    return this.httpService.postService('notes/changesColorNotes',reqdata,true,header)
  }
}
