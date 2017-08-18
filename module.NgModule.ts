//PRE DEFINED MODULE DEPENDENCIES
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
//

// COMPONENTS
import { MultipleSelect } from "./components/multiple-select/multiple-select.component";
import { CustomTextbox } from "./components/textbox/textbox.component";
import { ToastComponent } from "./components/toast/toast.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { RadioBtnComponent } from "./components/radio-btn/radio-btn.component";
import { MyDatePicker } from "./components/customdatepicker/custom-date-picker.component";
import { AutoSuggestComponent } from "./components/auto-suggest/auto-suggest.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { DropdownSelectComponent } from "./components/dropdown-select/dropdown-select.component";
import { ProgressbarComponent } from "./components/progressbar/progressbar.component"
import { LoaderComponent } from "./components/loader/loader.component"
import { QueStepsComponent } from "./components/que-steps/que-steps.component"
import { SwitchToggle } from "./components/switch-toggle/switch-toggle"

import { GlobalScript } from "./api/library"

//DIRECTIVES
import { FocusDirective } from "./directives/datepicker.focus.directive";




@NgModule({
  declarations :[
    MultipleSelect,
    CustomTextbox,
    ToastComponent,
    CheckboxComponent,
    RadioBtnComponent,
    MyDatePicker,
    AutoSuggestComponent,
    FocusDirective,
    AccordionComponent,
    DropdownSelectComponent,
    ProgressbarComponent,
    LoaderComponent,
    QueStepsComponent,
    SwitchToggle
  ],
  imports :[
    CommonModule,
    FormsModule,
  ],
  providers :[
    GlobalScript
  ],
  exports:[
    MultipleSelect,
    CustomTextbox,
    ToastComponent,
    RadioBtnComponent,
    CheckboxComponent,
    MyDatePicker,
    FocusDirective,
    DropdownSelectComponent,
    AccordionComponent,
    AutoSuggestComponent,
    ProgressbarComponent,
    LoaderComponent,
    QueStepsComponent,
    SwitchToggle
  ]
})
export class isiNgComponents{}
