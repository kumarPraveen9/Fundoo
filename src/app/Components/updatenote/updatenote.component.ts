import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeService } from 'src/app/Services/note/node.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss'],
})
export class UpdatenoteComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  constructor(
    private note: NodeService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.description = data.description;
    this.id = data.id;
  }

  ngOnInit(): void {}

  closeDialog() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteId: this.id,
    };
    this.note.updatenotes(reqData, this.id).subscribe((response: any) => {
      console.log('update response', response);
    });
    this.dialogRef.close();
  }
}
