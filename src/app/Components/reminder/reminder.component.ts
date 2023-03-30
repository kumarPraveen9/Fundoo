import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  reminderList:any;
  constructor(private notes: NodeService) { }
  ngOnInit(): void {
    this.getremindNotes();
  }

  getremindNotes() {
    console.log('Get reminder List Successful');
    this.notes.getallremindernotes().subscribe((response: any) => {
       console.log(response);
      this.reminderList=response.data.data;
      this.reminderList.reverse();
     
      console.log("reminder list", this.reminderList);
    })
  }
}
