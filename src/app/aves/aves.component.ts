import { Component, OnInit } from '@angular/core';
import {Ave} from '../ave';
import {AVES} from '../lista-aves';


@Component({
  selector: 'app-aves',
  templateUrl: './aves.component.html',
  styleUrls: ['./aves.component.css']
})
export class AvesComponent implements OnInit {

  aves = AVES;
  selectedAve: Ave;

onSelect(selecAve: Ave): void {
  this.selectedAve = selecAve;
}
  constructor() { }

  ngOnInit() {
  }

}
