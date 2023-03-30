import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-iconsnote',
  templateUrl: './iconsnote.component.html',
  styleUrls: ['./iconsnote.component.scss']
})
export class IconsnoteComponen implements OnInit {
  @Input() noteObject:any
  @Output() NotesDisplay = new EventEmitter<string>();
  colorArray: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'greenyellow' },
    { code: '#B0C4DE', name: 'LightSteelBlue' },
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine' },
    { code: '#FFE4C4', name: 'Bisque' },
    { code: '#C0C0C0', name: 'Silver' },
    { code: '#BC8F8F', name: 'RosyBrown'},
  ];
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

  remind() {
    let reqData={
      reminder:[true],
      noteIdList:[this.noteObject.id],
    }
    console.log(reqData)
    this.note.remindnotes(reqData).subscribe((response: any) => {
      console.log("Note remindered Successfully",response);
      
    })
  }

  selectColor(colors:any){
    let reqData = {
      color : colors.name,
      noteID : this.noteObject.id
    }
    console.log(reqData);
     this.note.notesColor(reqData).subscribe((response:any) =>{
      console.log(response);
      this.NotesDisplay.emit(response);
    })
  }
}
