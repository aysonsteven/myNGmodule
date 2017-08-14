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
    Renderer
} from "@angular/core"
@Component({
  moduleId: module.id,
  host: { '(document:click)': 'onClick($event)' },
  selector: 'custom-dropdown',
  templateUrl: 'dropdown-select.component.html',
  styleUrls: ['dropdown-select.component.scss']
})

export class DropdownSelectComponent implements OnInit, OnDestroy, OnChanges{
  @Input() elementID: string = "";
  @Input() object: any;
  @Input() iteratedLabel: string;
  @Input() model: string;
  @Input() autoSuggest: boolean = false;
  @Input() label: string = "";
  @Input() default: string;
  @Output() bind: EventEmitter<any> = new EventEmitter();

  displayFlag: boolean = false;
  constructor( private zone: NgZone, private _eref: ElementRef , private renderer: Renderer){}

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  ngOnChanges( changes: any ){

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
    console.log(' even ', event);
    this.displayFlag = !this.displayFlag;
    if( this.iteratedLabel && obj )this.model = obj[this.iteratedLabel];
    else if( ! this.iteratedLabel && obj ) this.model = obj;
    if( obj == null ) this.model = null;
    this.bind.emit( index );
    console.log(this.renderer.setElementClass);
  }

  flag( itemdrp ){
    if( ! this.autoSuggest ) itemdrp.blur()
  }

  show(){
    if( ! this.autoSuggest ) this.displayFlag = ! this.displayFlag;
  }
}
