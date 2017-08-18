import { Component, Input, Output, EventEmitter, ElementRef, Renderer, ViewChild, OnInit, OnDestroy, OnChanges } from "@angular/core"
@Component({
  selector: 'custom-overlaypanel',
  moduleId: module.id,
  templateUrl: 'overlay.component.html',
  styleUrls: ['overlay-panel.component.scss']
})
export class OverlayComponent{

  @Input() content: string;

  constructor(){}
}
