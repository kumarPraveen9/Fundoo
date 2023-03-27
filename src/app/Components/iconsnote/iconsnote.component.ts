import { Component, OnInit ,Input } from '@angular/core';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-iconsnote',
  templateUrl: './iconsnote.component.html',
  styleUrls: ['./iconsnote.component.scss']
})
export class IconsnoteComponen implements OnInit {
  @Input() noteObject:any

  constructor(private note: NodeService) { }
  ngOnInit(): void {
   
  }
  onDelete() {
console.log(this.noteObject);
    let reqData={
      isDeleted: true,
      noteIdList:[this.noteObject.id]
    }
    console.log(reqData)
    this.note.trashnotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
     
    })
    
  }
  onArchive() {
    let reqData={
      isArchived:true,
      noteIdList:[this.noteObject.id],
    }
    console.log(reqData)
    this.note.archivenotes(reqData).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      
    })
  }
}
