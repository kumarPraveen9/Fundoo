import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  trashList:any;

  constructor(private notes:NodeService){}

ngOnInit(): void {
  this.TrashList();
}
TrashList(){
console.log("Get all trash notes");
this.notes.getallTrashnotes().subscribe((response : any) => {
  console.log(response);
  this.trashList=response.data.data;
  this.trashList.reverse();
  console.log(this.trashList);
});

}

deleteforever(noteid:any)
{
  let reqData={
   
    noteIdList:[noteid.id]
  }
  console.log(reqData)
  this.notes.getPermenentdelete(reqData).subscribe((response: any) => {
    console.log("Note deleted forever Successfully",response);
    window.location.reload();
})
}

}
