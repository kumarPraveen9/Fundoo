import { Component } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  display : boolean=true;

  show(){
    this.display=!this.display;
  }
}
