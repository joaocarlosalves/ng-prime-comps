import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewButtonComponent } from './new-button/new-button.component';

@NgModule({
  declarations: [
    NewButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NewButtonComponent]
})
export class SharedComponentsModule { }
