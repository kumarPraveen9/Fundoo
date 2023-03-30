import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {
mssg:any=localStorage.getItem('notesView');



outmsg= new BehaviorSubject([]);
inmsg= this.outmsg.asObservable();
  constructor() {
   
   }
sendMessage(data:any)
{
  this.outmsg.next(data);
}




}
