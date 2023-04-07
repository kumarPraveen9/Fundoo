import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent implements OnInit{
  notesArray=[];
x:any
dataUpdated:any=[];
  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    console.log('Get all notes onsubmit:');
    this.nodeService.getallnotes().subscribe((response : any) => {
     // console.log("het h",response);
      this.notesArray=response.data.data;

      

      this.dataUpdated = this.notesArray.filter(function(obj:any) {
     // console.log(obj.isDeleted);
        return (obj.isDeleted==false && obj.isArchived==false);
    });
   
      
     this.dataUpdated.reverse();
     console.log("this is that:",this.dataUpdated);
    });

  }
  
  receiveDisplayGetAllNotes($event: any) {
    console.log("Display All Notes",$event);
    this.onSubmit()
  }

  receiveCreateNotes($event: any) {
    console.log("Note Created", $event);
    this.onSubmit()
  }

}
