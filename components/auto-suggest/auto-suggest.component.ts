import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from "@angular/core"
import { AutoSuggestService } from "../../services/auto-suggest.service"
@Component({
  selector: 'auto-suggest',
  templateUrl: './auto-suggest.component.html',
  styleUrls: ['./auto-suggest.component.scss'],
  providers: [ AutoSuggestService ]
})

export class AutoSuggestComponent implements OnInit, OnDestroy, OnChanges{
  @Input() object;
  @Input() model: string = "";
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() enter: EventEmitter<any> = new EventEmitter();

  constructor( private suggest: AutoSuggestService){}

  ngOnChanges( changes: any ){

  }

  ngOnInit( ){

  }

  ngOnDestroy( ){

  }
}
