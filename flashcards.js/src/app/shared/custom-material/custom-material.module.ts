import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdProgressBarModule, MdInputModule, MdSelectModule, MdDialogModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressBarModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule 
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressBarModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule 
  ],
  declarations: []
})
export class CustomMaterialModule { }
