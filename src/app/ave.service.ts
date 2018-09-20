import { Injectable } from '@angular/core';
import {Ave} from './ave';
import {AVES} from './lista-aves';
import {Observable, of} from 'rxjs';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class AveService {

  constructor(
    
    private mensajeService: MensajeService,
    
  ) { }
 
  getAves(): Observable<Ave[]>{
    this.mensajeService.add('AveService: traido de aves');
    return of(AVES);
  }
  getAve(id: number): Observable<Ave> {
    this.mensajeService.add(`AveService: traido de aves id=${id}`);
    return of(AVES.find(ave => ave.id === id));
  }
}

