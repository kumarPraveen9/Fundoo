import { Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { GridService } from 'src/app/Services/grid/grid.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit{

  @Input() NotesList:any;
  
message:any
  constructor(public dialog: MatDialog,private gridService:GridService){};
  ngOnInit() {
    this.message=this.gridService.dummy2.subscribe((result)=>{
      console.log("display note will got " , result);
      this.message=result;
    })
  }
   
    openDialog(note:any): void {
      const dialogRef = this.dialog.open(UpdatenoteComponent, {
        width: '40%',
        height: 'auto',
        
        data: note
      });
      dialogRef.afterClosed().subscribe(response => {
        console.log('The dialog was closed', response);
        
      })
    }


  



}