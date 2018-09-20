import { Component, OnInit } from '@angular/core';
import {Ave} from '../ave';
import {AveService} from '../ave.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  aves: Ave[] = [];

  constructor(private aveService: AveService) { }

  ngOnInit() {
    this.getAves();
  }
getAves(): void{
  this.aveService.getAves().subscribe(aves => this.aves = aves.slice(0,8));
}

}
