import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { GridService } from 'src/app/Services/grid/grid.service';
import { DataServiceService } from 'src/app/Services/dataService/data-service.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss'],
})
export class DisplaynoteComponent implements OnInit {
  @Input() NotesList:any;
  lenthTitle:any=[];
  @Output() DisplayGetAllNotes = new EventEmitter<string>();
  msg: any;
  message: any;
  defalt: any;
  searchNote: any;
  titlle:any;
  vv: any = 'note-card';
  pn: any = 'pin';
  constructor(
    public dialog: MatDialog,
    private gridService: GridService,
    private data: DataServiceService
  ) {}
  ngOnInit() {
    console.log("hadsa",this.NotesList);
    
  
    // this.lenthTitle=Object.entries(this.NotesList.title).length;
    // if(this.lenthTitle>60)
    // {
    //   this.titlle=this.lenthTitle.slice(0,63);
    //   console.log("the shorted one:  ",this.titlle);
      
    // }


    this.data.incomingData.subscribe((response) => {
      console.log('Search :', response);
      this.searchNote = response;
    });

    this.gridService.inmsg.subscribe((response) => {
      console.log('layout change works', response);
      console.log(this.message);

      this.message = response;

      if (this.message == '') {
        this.message = 'display-note row';
        this.vv = 'note-card';
        this.pn = 'pin';
      }

      if (this.message == 'display-note row') {
        this.vv = 'note-card';
        this.pn = 'pin';
      }
      if (this.message == 'column view') {
        this.vv = 'note-cardgrid';
        this.pn = 'pingrid';
      }
    });
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '30%',
      height: 'auto',

      data: note,
    });
    dialogRef.afterClosed().subscribe((response) => {
      console.log('The dialog was closed', response);
    });
  }

  receiveNotesDisplay($event: any) {
    console.log('Display Notes', $event);
    this.msg = $event;
    console.log('msg', this.msg);
    this.DisplayGetAllNotes.emit(this.msg);
  }
}
