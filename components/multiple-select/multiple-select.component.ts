import {Component, Input, OnInit, ElementRef, NgZone, Output, EventEmitter, OnChanges} from '@angular/core';
import { ExportBox } from  './../../../domains/project/box';
import { Subject } from "rxjs/Subject"

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'multi-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss']
})

export class MultipleSelect implements OnInit, OnChanges{
  selectedArray = [];
  flag: boolean = true;
  @Input() disabledSelectAll: boolean = false;
  @Input() selectedFlag: string;
  @Input() selectedLength:number;
  @Input() allIsSelected:boolean = false;
  @Input() iteratedLabel: string;
  @Input() higlightIdentifier: string;
  @Input() inputWidth: string;
  @Input() containerWidth: string;
  @Input() object: any;
  @Input() eventListener:Subject<any> = new Subject();
  @Input() resetDropdown: boolean = false;
  @Input() enablecloseOnChange: boolean = false;
  @Input() enableSelectAll: boolean = false;
  @Input() maxItemShowed: number = 4;
  @Input() closeOnClickOutside: boolean = false;
  @Input() dropdownLabel: string = "";
  @Input() elementID: string = "";
  @Output() checked: EventEmitter<any> = new EventEmitter();
  @Output() unchecked: EventEmitter<any> = new EventEmitter();
  @Output() checkedAll: EventEmitter<any> = new EventEmitter();
  @Output() unchecedkAll: EventEmitter<any> = new EventEmitter();
  inputObject : InputObject = new InputObject();
  constructor(private _eref: ElementRef, private zone: NgZone) { }

  ngOnInit(){
    // console.log( 'passed', this.object);
    // this.checkSelected();
    this.eventListener.subscribe( event =>{
      // console.log('changed');
      this.reset();
    });
    this.setOptions();
  }




  setOptions(){
    setTimeout( ( ) =>{
      if( this.inputWidth ) document.getElementById( this.elementID ).style.width = this.inputWidth + "px";
      if( this.containerWidth ) document.getElementById( `${this.elementID}container`).style.width = this.containerWidth + "px";
    }, 0 )
  }

  bindItem( event, idx ){
    if( event ) {
      this.object[idx][this.selectedFlag]=true;
      this.checked.emit( idx );
      // console.log('item', this.object[idx])
      this.selectedArray.push( this.object[ idx ][ this.iteratedLabel ] );
    }
    else{
      // console.log('item', this.object[idx])
      this.object[idx][this.selectedFlag]=false;
      this.unchecked.emit( idx );
      this.selectedArray.splice( this.selectedArray.indexOf( this.object[idx][this.iteratedLabel]), 1 );
    }
  }

  selectAllToggle( event ){
    this.unchecedkAll.emit();
    this.selectedArray = [];
    if( event ) {
      for( let x=0; x<=this.object.length - 1;x++){
        // console.log('obj', this.object[x])
        this.object[x][this.selectedFlag]=true;
        this.checked.emit( x );
        this.selectedArray.push( this.object[ x ][ this.iteratedLabel ] );

      }
    }
    else {
      for( let x=0; x<=this.object.length - 1;x++){
        this.bindItem(false, x);
      }
    }
  }

  // checkSelected(){
  //   for( let ctr = 0; ctr <= this.object.length; ctr++ ){
  //     console.log('obj', this.object[ ctr ] );
  //   }
  //   // if( this.resetDropdown ) console.log('reset');
  // }

  ngOnChanges( changes : any ){
    if( changes.resetDropdown ) this.reset();
    if( changes.object ) this.reset()
  }

  // onChangeCheckBox( box ){
  //   let obj = {
  //     idx: this.object.indexOf(box),
  //     flag: box ? box.isSelected : false
  //   };
  //   console.log( 'idx', this.object.indexOf(box))
  //   this.resetDropdown = false;
  //   console.log('selected', this.selectedArray.length);
  //   if( this.enablecloseOnChange )this.flag = !this.flag
  //   this.coutSelected.emit( obj );
  // }

  reset(){
    this.selectedArray = [];
    this.inputObject.allIsSelected = false;
    this.inputObject.selectedBoxes = [];
    for(let x = 0; x < this.object.length - 1; x++){
      if( this.object[x] )this.object[x].isSelected = false;
    }
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      if( ! this.flag && this.closeOnClickOutside ) this.run();
    }
  }

  run(){
    this.zone.run(()=>{
      this.flag = true;
      // console.info('clicked outside');
    })
  }

  check(val){
    val.click();
  }

  // clickSelectAll(){
  //   this.resetDropdown = false;
  //   this.inputObject.allIsSelected = !this.inputObject.allIsSelected;
  //   this.inputObject.selectedBoxes = [];
  //   this.selectedArray = [];
  //   if( this.inputObject && this.inputObject.allIsSelected){
  //     for(let x = 0; x < this.object.length; x++){
  //       // this.removeSelectedBox( x );
  //       this.object[x].isSelected = false;
  //       if( this.object[x] )this.object[x].isSelected = true;
  //       this.addSelectedBox(x);
  //       this.onChangeCheckBox( this.object[x] );
  //       console.log('checkselected', this.inputObject.selectedBoxes )
  //     }
  //   }else{
  //     for(let x = 0; x < this.object.length; x++){
  //       if( this.object[x] ) this.object[x].isSelected = false;
  //       this.removeSelectedBox( x );
  //       this.selectedArray = [];
  //       this.onChangeCheckBox( this.object[x] );
  //     }
  //     this.inputObject.selectedBoxes = [];
  //   }
  //   console.log("all:");
  //   console.log(this.inputObject.selectedBoxes);
  // }
  // addSelectedBox( index: number){
  //
  //   this.resetDropdown = false;
  //   this.inputObject.selectedBoxes.push(this.object[index]);
  //   console.log( 'isselected', this.object[index]);
  //   if( this.selectedArray.indexOf( this.object[index].boxSequenceNumber ) <= -1 )this.selectedArray.push( this.object[index].boxSequenceNumber );
  //   console.log('array', this.selectedArray)
  // }


  // clickSelectBox(item : Selectable, index : number){
  //   this.resetDropdown = false
  //   this.inputObject.allIsSelected = false;
  //   if( this.object[index] ) this.object[index].isSelected = !this.object[index].isSelected;
  //   if(this.object[index] && this.object[index].isSelected){
  //     this.addSelectedBox(index);
  //     console.log("add");
  //   }else{
  //     this.removeSelectedBox(index);
  //     console.log("delete");
  //   }
  //   if( this.object.length == this.selectedArray.length ) this.inputObject.allIsSelected = true;
  //   console.log("individual");
  //   console.log(this.inputObject.selectedBoxes);
  // }

  removeItem( idx ){

  }

  // removeSelectedBox(index : number){
  //   this.resetDropdown = false
  //   let index2 = this.inputObject.selectedBoxes.indexOf(this.object[index]);
  //   if (index2 !== -1) {
  //     this.inputObject.selectedBoxes.splice(index2, 1);
  //     this.selectedArray.splice( index2, 1 )
  //     console.log('array', this.selectedArray)
  //   }
  //   console.log('length',this.selectedArray.length);
  // }
  value(): string{
    if( this.selectedArray.length >= this.maxItemShowed ) return `${this.selectedArray.length} items selected`;
    if( this.selectedArray.length >= 1 ) return this.selectedArray.toString();
    else return "Select";
  }

  isChecked(){
    // console.log( this.selectedLength )
    // for( let ctr = 0; ctr < this.object.length; ctr++ ){
    if(this.object.length == this.selectedLength) this.inputObject.allIsSelected = true;
    else this.inputObject.allIsSelected = false;
      // else this.inputObject.allIsSelected = false;
    // }
    // console.log('ischecked', this.inputObject.allIsSelected);
    return this.inputObject.allIsSelected;
  }
}





class InputObject{ // input purpose only
  selectedBoxes = [];
  allIsSelected : boolean = false;
}

interface Selectable{
  isSelected : boolean;
}
