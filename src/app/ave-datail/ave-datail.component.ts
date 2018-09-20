import { Component, OnInit} from '@angular/core';
import {Ave} from '../ave';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AveService} from '../ave.service';

@Component({
  selector: 'app-ave-datail',
  templateUrl: './ave-datail.component.html',
  styleUrls: ['./ave-datail.component.css']
})
export class AveDatailComponent implements OnInit {
  ave: Ave;

  constructor(
    private ruta: ActivatedRoute,
    private aveService: AveService,
    private ubicacion: Location
  ) { }

  getHero(): void {
    const id = +this.ruta.snapshot.paramMap.get('id');
    this.aveService.getAve(id)
      .subscribe(ave => this.ave = ave);
  }
  goBack(): void {
    this.ubicacion.back();
  }
  ngOnInit(){
  }

}
