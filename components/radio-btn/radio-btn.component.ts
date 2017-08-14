import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core"
@Component({
  selector: 'custom-radiobutton',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss']
})

export class RadioBtnComponent implements OnInit{
  @Input() ripple: boolean = false;
  @Input() model: string = "";
  @Input() elementID: string = "";
  @Input() radioGroup: string = "";
  @Input() radioLabel: string = "";
  @Input() radioValue: string = "";
  @Input() numberOfItems: number = 1;
  @Output() binder: any = new EventEmitter();
  @Output() clickBind: any = new EventEmitter();
  @Output() change: any = new EventEmitter();

  constructor(){}

  ngOnInit(){
    setTimeout( ()=>{
      console.log('radio', this.model)
    }, 0)

  }
}
