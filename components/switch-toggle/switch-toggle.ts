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
  @Input() label: string;
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor( private elmref: ElementRef){}

  ngOnInit(){}

  ngOnChanges(){}

  ngOnDestroy(){}


}
