import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {
mssg:any
dummy= new BehaviorSubject([]);
dummy2= this.dummy.asObservable();
  constructor() { }
sendMessage(data:any)
{
  this.dummy.next(data);
}




}
