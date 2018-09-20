import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AvesComponent } from './aves/aves.component';
import { FormsModule } from '@angular/forms';
import { AveDatailComponent } from './ave-datail/ave-datail.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppRutaModule } from './/app-ruta.module';
import { TableroComponent } from './tablero/tablero.component';
@NgModule({
  declarations: [
    AppComponent,
    AvesComponent,
    AveDatailComponent,
    MensajesComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRutaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
