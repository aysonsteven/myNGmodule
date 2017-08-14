import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, ElementRef } from "@angular/core"
import { Subject } from "rxjs/Subject"
@Component({
  moduleId: module.id,
  selector: 'custom-progress-bar',
  templateUrl: 'progressbar.component.html',
  styleUrls: ['progressbar.component.scss']
})

export class ProgressbarComponent implements OnInit, OnChanges{
  @Input() paddingTop: number;
  @Input() paddingBottom: number
  @Input() progressState: number = 0;
  @Input() subjectListener: number=0;
  @Input() elementID: string;
  @Input() progressBG: string;
  state: number;
  constructor(){}

  ngOnInit(){
    this.setOptions( 0 );
  }


  setOptions( timer ){
    setTimeout( ()=>{
      if( this.paddingTop && this.elementID ) document.getElementById(this.elementID).style.paddingTop=this.paddingTop + "px";
      if( this.paddingBottom && this.elementID ) document.getElementById( this.elementID ).style.paddingBottom = this.paddingBottom + "px";
    }, timer )
  }

  ngOnChanges( changes: any ){
    // if( changes.subjectListener ) {
    //   setTimeout(() =>{
    //     document.getElementById(this.elementID).style.width = this.subjectListener + "%";
    //   },0)
    // }
  }
}
