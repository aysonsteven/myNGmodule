import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter, ElementRef, Renderer } from "@angular/core"

@Component({
  selector: 'isi-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent implements OnInit {
  @Input() isRecursive: boolean;
  @Input() isChild: boolean =false;
  @Input() iteratedContent: string;
  @Input() iteratedLabel: string;
  @Input() childIteration: string;
  @Input() object;
  @Input() transition;
  @Input() behavior;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor( private elmref: ElementRef, private render: Renderer ){}

  ngOnInit(){
    console.log( 'obj', this.object)
  }

  test( val ){
    if( val && this.childIteration ) return true;
    return false;
  }

  testChange( event, object ){

    if( event.target.checked && object[this.childIteration] ) {
      // this.render.setElementProperty(this.elmref.nativeElement[1], 'max-height', 10 + 10 * object[this.childIteration].length + "em")
      console.log( this.elmref.nativeElement )
      // console.log( event.target.nextSibling.parentElement.childNodes[5]);
      // event.target.nextSibling.parentElement.childNodes[5].maxHeight = 10 + 10* object[this.childIteration].length + "em";
    }
  }
}
