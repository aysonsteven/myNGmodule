import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core"
@Component({
  selector: 'custom-textarea',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class CustomTextbox implements OnInit{
  @Input() autofocus: boolean = false;
  @Input() elementID: string = "";
  @Input() label: string = "";
  @Input() labelPosition: string = "left";
  @Input() autoFocus:boolean = false;
  @Input() textBoxType: string = "text";
  @Input() model;
  @Input() disabled: boolean = false;
  @Output() bind: any =  new EventEmitter();
  @Output() keyup: any = new EventEmitter();
  constructor(){}

  ngOnInit(){
    console.info( 'id', this.elementID, 'flagFocus', this.autoFocus)
    if( this.elementID && this.autoFocus ) this.focusOnLoad();
    // if( this.textBoxType == 'number' ) parseInt( this.model );
  }

  checkType( event ){
    console.log( typeof( event ))
  }

  focusOnLoad(){
    setTimeout( ()=>{
      document.getElementById(this.elementID).focus()
    },0)
  }
}
