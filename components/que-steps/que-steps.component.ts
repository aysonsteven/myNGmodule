import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, Renderer, ElementRef } from "@angular/core"
@Component({
  moduleId: module.id,
  selector: 'que-steps',
  templateUrl: 'que-steps.component.html',
  styleUrls: ['que-steps.component.scss']
})

export class QueStepsComponent implements OnInit, OnChanges, OnDestroy{
  @Input() object:any;
  @Input() isClickable: boolean = false;
  @Output() bindModel: EventEmitter<any> = new EventEmitter();
  stepsModel: number = 1;
  constructor(){}

  ngOnInit(){
    this.emitModel();
  }
  ngOnChanges(){}
  ngOnDestroy(){}

  clicked( val ){
    if( !this.isClickable ) return;
    if( val-1 > this.stepsModel ) return;
    this.bindModel.emit( this.stepsModel = val );
    ///////////////////////////////////////////////////////
    if( this.isClickable == true ) {
      if( val-1 < this.stepsModel ){
        this.stepsModel = val;
        this.bindModel.emit( this.stepsModel );
      }
    }



  }

  emitModel(){
    this.bindModel.emit( this.stepsModel );
  }
  next(){
    console.log( this.stepsModel );
    if( this.stepsModel >= this.object.length) return;
    this.stepsModel+=1;
    this.emitModel();
  }
  prev(){
    console.log( this.object.length, this.stepsModel)
    if( this.stepsModel <= 1) return;
    this.stepsModel-=1;
    this.emitModel()
  }
}
