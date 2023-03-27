import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  archiveList: any

  constructor(private notes: NodeService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }

  getArchiveNotes() {
    console.log('Get Archive List Successful');
    this.notes.getallArchivenotes().subscribe((response: any) => {
      // console.log(response);
      this.archiveList=response.data.data;
      this.archiveList.reverse();
     
      console.log("Archive list", this.archiveList);
    })
  }

}
