
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { GridService } from 'src/app/Services/grid/grid.service';
import { DataServiceService } from 'src/app/Services/dataService/data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy,OnInit{
  cls:any="display-note row";
 defalt:any;
 mm:any;
 //myImg:any
 myImg="../../../assets/view.svg"
 
  //display-note row
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private gridService:GridService,private data:DataServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    //console.log("helllllo col",this.cls);
    
   
  }
  
  colView(){
     //this.myImg = document.getElementById('imag') as HTMLImageElement;
console.log(this.myImg)
    if(this.myImg=="../../../assets/view.svg"){
      this.myImg="../../../assets/grid_view_FILL0_wght400_GRAD0_opsz48.svg";
    }
    else{
      this.myImg="../../../assets/view.svg";
    }
   
   
 
      if(this.cls == "display-note row"){
        this.cls = "column view"
        console.log("column view", this.cls)
      }else{
        this.cls = "display-note row"
        console.log("row view", this.cls)
      }
      this.gridService.sendMessage(this.cls);
    
  }
  ngOnInit(): void {
    
   
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  search(msg: any) {
    //console.log($event.target.value)
    this.mm=msg;
    console.log("the data is:",this.mm);
    
    this.data.outgoingData(this.mm);
  }

 
}
