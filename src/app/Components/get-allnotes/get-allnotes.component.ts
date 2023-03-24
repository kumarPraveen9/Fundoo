import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent implements OnInit{
  notesArray:any;

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    console.log('Get all notes onsubmit:');
    this.nodeService.getallnotes().subscribe((response : any) => {
      console.log(response);
      this.notesArray=response.data.data;
      this.notesArray.reverse();
      console.log(this.notesArray);
    });

  }

}
