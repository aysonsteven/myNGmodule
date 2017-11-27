import {Component, Input, Output, OnInit, OnChanges, OnDestroy, EventEmitter } from "@angular/core"
import { Subject } from "rxjs/Subject"
@Component({
  selector: 'loader',
  moduleId: module.id,
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss']
})

export class LoaderComponent implements OnInit{
  @Input() listener: Subject<any> = new Subject();
  flag: boolean = false;
  constructor(){}

  ngOnInit(){
    this.listener.subscribe( x=>{
      this.flag = x;
    })
  }
}
