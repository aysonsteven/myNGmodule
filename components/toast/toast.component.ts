import { Component, Input, EventEmitter, Output, OnInit, OnChanges, Renderer, ElementRef, ViewChild } from "@angular/core";
import { Subject } from "rxjs/Subject"

@Component({
  selector: 'custom-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnChanges{
  @ViewChild('toastElement') toast: ElementRef;
  @Input() type: string;
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
  constructor( private renderer: Renderer){

  }
  ngOnInit(){
    this.show.subscribe( event =>{

        this.initialize();
      setTimeout( ()=>{
        if( event ) this.showToast( );
        this.timeOut();
      }, 600)
    })

  }
  headerString(){
    if( this.type =='danger') return 'Error';
    return 'Well done';
  }
  initialize(){

    if( this.top  ) this.renderer.setElementStyle(this.toast.nativeElement,'width', this.top+"px")
    if( this.left) this.renderer.setElementStyle(this.toast.nativeElement,'left', this.left+"px");
    if( this.right ) this.renderer.setElementStyle(this.toast.nativeElement,'right', this.right+"px");
    if( this.transition && this.elementID ) this.renderer.setElementStyle(this.toast.nativeElement,'transition', this.transition);
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

