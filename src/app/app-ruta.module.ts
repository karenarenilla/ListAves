import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AvesComponent} from './aves/aves.component';
import {TableroComponent} from './tablero/tablero.component';
import { AveDatailComponent } from './ave-datail/ave-datail.component';

const rutas: Routes = [
  { path: '', redirectTo: '/tablero', pathMatch: 'full' },
  { path:'aves', component: AvesComponent},
  { path:'tablero', component: TableroComponent},
  { path: 'detail/:id', component: AveDatailComponent},

  ];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(rutas)]

})

export class AppRutaModule {

 }
