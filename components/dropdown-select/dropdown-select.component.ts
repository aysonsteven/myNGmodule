import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit,
  OnChanges,
  NgZone,
  ElementRef,
  Renderer, ViewChild
} from "@angular/core";
import { Subject } from "rxjs/Subject";
@Component({
  moduleId: module.id,
  host: { '(document:click)': 'onClick($event)' },
  selector: 'custom-dropdown',
  templateUrl: 'dropdown-select.component.html',
  styleUrls: ['dropdown-select.component.scss']
})

export class DropdownSelectComponent implements OnInit, OnDestroy, OnChanges{
  selectedItem;
  @Input() selected: Subject<any> = new Subject();
  @ViewChild( 'input' ) input: ElementRef;
  @ViewChild( 'content' ) content: ElementRef;
  @ViewChild( 'select' ) select: ElementRef;
  @Input() elementID: string = "";
  @Input() object: any;
  @Input() iteratedLabel: string;
  @Input() model: string;
  @Input() autoSuggest: boolean = false;
  @Input() label: string = "";
  @Input() default: string;
  @Input() defailtValue: any;
  @Input() optionValue: any;
  @Input() inputWidth: string = "";
  @Input() contentWidth: string = "";
  @Input() widthIdentifier: string = "";
  @Input() placeholder: string = "";
  @Input() fontSize: string;
  @Input() componentWidth: string = "";
  @Output() bindObject: EventEmitter<any> = new EventEmitter();
  @Output() bind: EventEmitter<any> = new EventEmitter();

  displayFlag: boolean = false;
  constructor( private zone: NgZone, private _eref: ElementRef , private renderer: Renderer){}

  ngOnInit(){
    if( this.componentWidth ) this.renderer.setElementStyle( this.select.nativeElement, 'width', this.componentWidth );
    if( this.inputWidth ) this.renderer.setElementStyle( this.input.nativeElement , 'width', this.inputWidth + this.widthIdentifier );
    if( this.contentWidth )  this.renderer.setElementStyle( this.content.nativeElement, 'width', this.contentWidth );
    if( this.fontSize ) this.renderer.setElementStyle( this.input.nativeElement , 'font-size', this.fontSize );
    this.selected.subscribe( res =>{
      this.selectedItem = res;
      console.log( 'res', res );
    });
    setTimeout(()=>{
      console.log('object', this.object );
    } ,0)
  }

  ngOnDestroy(){

  }

  ngOnChanges( changes: any ){
    if( changes.model ){
      console.log('changed', this.model );
      console.log('object', this.object)
    }
  }
  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      if( this.displayFlag ) this.run();
    }
  }

  run(){
    this.zone.run(()=> this.displayFlag = false )
  }

  selectItem( event, obj, index ){
    if( obj instanceof Object )this.bindObject.emit( obj[this.optionValue] );
    else this.bindObject.emit( 0 );
    this.displayFlag = !this.displayFlag;
    if( this.iteratedLabel && obj )this.model = obj[this.iteratedLabel];
    else if( ! this.iteratedLabel && obj ) this.model = obj;
    if( obj == null ) this.model = null;

    this.bind.emit( index );
    // console.log(this.renderer.setElementClass);
  }

  flag( itemdrp ){
    if( ! this.autoSuggest ) itemdrp.blur()
  }

  show(){
    console.log('clicked')
     this.displayFlag = ! this.displayFlag;
  }
}
