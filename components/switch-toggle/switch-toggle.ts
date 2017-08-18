import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  ElementRef,
} from "@angular/core"
@Component({
  selector: 'switch-toggle',
  moduleId: module.id,
  templateUrl: 'switch-toggle.html',
  styleUrls: ['switch-toggle.component.scss']
})

export class SwitchToggle implements OnInit, OnChanges, OnDestroy{
  @Input() model: string;
  @Input() iteratedStatus: string;
  @Input() label: string;
  @Input() trueLabel: string;
  @Input() falseLabel: string;
  @Output() bind: EventEmitter<any> = new EventEmitter();
  constructor( private elmref: ElementRef){}

  ngOnInit(){}

  ngOnChanges(){}

  ngOnDestroy(){}

  switchLabel( bool ){
    if( bool ) return this.trueLabel;
    return this.falseLabel;
  }
}
