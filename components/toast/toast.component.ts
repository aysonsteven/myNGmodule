import { Component, Input, EventEmitter, Output, OnInit, OnChanges } from "@angular/core";
import { Subject } from "rxjs/Subject"

@Component({
  selector: 'custom-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnChanges{
  @Input() message : string = "";
  @Input() toastType: string = "success";
  @Input() cooldown: number = null;
  @Input() transition: string = "";
  @Input() top: string = "";
  @Input() left: string = "";
  @Input() right: string = "";
  @Input() show: Subject<any> = new Subject();
  @Input() elementID: string = "";
  @Input() bound: string = ""

  setTimer: any;
  constructor(){

  }
  ngOnInit(){
    this.show.subscribe( event =>{
      setTimeout( ()=>{
        this.initialize();
      },0)
      setTimeout( ()=>{
        if( event ) this.showToast( );
        this.timeOut();
      }, 600)
    })

  }

  initialize(){
    if( this.top && this.elementID ) document.getElementById(this.elementID).style.top = this.top+"px";
    if( this.left && this.elementID ) document.getElementById(this.elementID).style.left = this.left+"px";
    if( this.right && this.elementID ) document.getElementById(this.elementID).style.right = this.right+"px";
    if( this.transition && this.elementID ) document.getElementById(this.elementID).style.transition = this.transition;
  }
  showToast(  ){
    if( this.bound && this.elementID ) {

      document.getElementById( this.elementID ).style.top = this.bound+"px";
    }
  }

  timeOut(){
    let timer = this.cooldown;
    if( ! this.cooldown ) return;
    this.setTimer = setTimeout( ()=>{
      if( this.top && this.elementID ) document.getElementById(this.elementID).style.top = this.top+"px";
      this.cooldown -= 1;
    }, timer)
  }

  clearTimer() {
    clearTimeout( this.setTimer )
  }

  ngOnChanges( changes ){

  }
}

