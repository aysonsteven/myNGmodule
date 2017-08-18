import { Component, Input, Output, EventEmitter, ElementRef, OnInit, OnDestroy, OnChanges, Renderer, ViewChild } from "@angular/core"
@Component({
  selector: 'custom-chart',
  moduleId: module.id,
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.scss']
})

export class ChartComponent{

  @Input() object;
  @Input() type: string;
  @Input() legends;
  @Output() bind: EventEmitter<any> = new EventEmitter();

  constructor(){}
}
