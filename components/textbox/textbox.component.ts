import {
  Component, Input, OnInit, Output, EventEmitter, ViewChild, Renderer, ElementRef,
  AfterViewInit
} from "@angular/core"
@Component({
  selector: 'custom-textarea',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class CustomTextbox implements OnInit{
  @ViewChild('inputElement') txt: ElementRef;
  @ViewChild('inputLabel') labelElement: ElementRef;
  @ViewChild('inputMessageElement') msg: ElementRef;
  @Input() isRequired: boolean = false;
  @Input() textFieldWidth: number;
  @Input() labelWidth: number;
  @Input() widthIdentifier: string = "";
  @Input() autofocus: boolean = false;
  @Input() elementID: string = "";
  @Input() label: string = "";
  @Input() labelPosition: string = "left";
  @Input() autoFocus:boolean = false;
  @Input() textBoxType: string = "text";
  @Input() model;
  @Input() messageColor: string;
  @Input() inputMessage: string = "";
  @Input() disabled: boolean = false;
  @Input() placeholder: string = "";
  @Input() fontSize: string;
  @Output() bind: any =  new EventEmitter();
  @Output() keyup: any = new EventEmitter();
  constructor( private renderer: Renderer ){

  }
  ngOnInit(){
    console.info( 'id', this.elementID, 'flagFocus', this.autoFocus);
    if( this.elementID && this.autoFocus ) this.txt.nativeElement.focus();
    if( this.labelElement )  this.applyLabelWidth();
    if( this.textFieldWidth ) this.renderer.setElementStyle( this.txt.nativeElement,'width', this.textFieldWidth + this.widthIdentifier);
    if( this.messageColor ) this.renderer.setElementStyle( this.msg.nativeElement, 'color', this.messageColor );
    if( this.fontSize ) this.renderer.setElementStyle( this.txt.nativeElement , 'font-size', this.fontSize );
  }
  applyLabelWidth(){
    this.renderer.setElementStyle( this.labelElement.nativeElement, 'vertical-align', 'sub');
    this.renderer.setElementStyle( this.labelElement.nativeElement, 'display', 'inline-block');
    this.renderer.setElementStyle( this.labelElement.nativeElement, 'width', this.labelWidth+'px');
  }
  checkType( event ){
    console.log( typeof( event ))
  }
}
