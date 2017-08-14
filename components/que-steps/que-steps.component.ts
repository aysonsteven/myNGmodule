import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from "@angular/core"
@Component({
  moduleId: module.id,
  selector: 'que-steps',
  templateUrl: 'que-steps.component.html',
  styleUrls: ['que-steps.component.scss']
})

export class QueStepsComponent implements OnInit, OnChanges, OnDestroy{
  @Input() object:any;
  constructor(){}

  ngOnInit(){}
  ngOnChanges(){}
  ngOnDestroy(){}
}
