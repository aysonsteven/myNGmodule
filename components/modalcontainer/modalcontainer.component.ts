import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer, ViewChild} from "@angular/core";
@Component({
  selector: 'modal-container',
  moduleId: module.id,
  template: `
  <fieldset tabindex="0" #fieldset (keydown.esc)="esc.emit()" (keydown.enter)="enter.emit()">
    <ng-content></ng-content>
  </fieldset>
  `,
  styles: [ ` fieldset{ outline: none }` ]
})
export class ModalcontainerComponent implements OnInit{
  @ViewChild( 'fieldset' ) field: ElementRef;
  @Output() esc: EventEmitter<any> = new EventEmitter();
  @Output() enter: EventEmitter<any> = new EventEmitter();
  constructor( private renderer: Renderer ){}

  ngOnInit(){
    this.field.nativeElement.focus();
    console.log('asd')
  }
}
