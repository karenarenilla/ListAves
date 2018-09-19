import { Component, OnInit, Input } from '@angular/core';
import {Ave} from '../ave';

@Component({
  selector: 'app-ave-datail',
  templateUrl: './ave-datail.component.html',
  styleUrls: ['./ave-datail.component.css']
})
export class AveDatailComponent implements OnInit {
@Input() ave: Ave;

  constructor() { }

  ngOnInit() {
  }

}
