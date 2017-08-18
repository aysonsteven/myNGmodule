import { Component , OnInit, Output, Input, EventEmitter, ElementRef, Renderer, ViewChild } from "@angular/core"
@Component({
  selector: 'custom-calendar',
  moduleId: module.id,
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss']
})
export class CalendarComponent{

  @Input()events;
  @Output() binder: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(){}
}
