import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from "@angular/core"
@Component ({
  moduleId: module.id,
  selector: 'custom-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit, OnChanges, OnDestroy{
  @Input() semiSelected: boolean = false;
  @Input() model: any;
  @Input() inputName: string = "";
  @Input() elementID: string = "";
  @Input() label: string = "";
  @Input() preventSelect: boolean = false;
  @Input() selected: boolean = false;
  @Input() removeWidth: boolean = false;
  @Input() highlightIdentifier: boolean;
  @Input() selectedVal;
  @Input() selectCounter: number = 0;
  @Output() bind: any = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(){}

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  ngOnChanges( changes : any ){
    if( changes.model ) console.log('changed')
  }

  checkWhiteSpaces(): boolean{
    if( /\S/.test( this.label ) ) return true;
    return false;
  }

}
