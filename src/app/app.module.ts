import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AvesComponent } from './aves/aves.component';
import { FormsModule } from '@angular/forms';
import { AveDatailComponent } from './ave-datail/ave-datail.component';



@NgModule({
  declarations: [
    AppComponent,
    AvesComponent,
    AveDatailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
