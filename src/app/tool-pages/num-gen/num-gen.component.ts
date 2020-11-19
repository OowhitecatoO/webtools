import { Component, OnInit } from '@angular/core';
import {range} from 'rxjs';

@Component({
  templateUrl: './num-gen.component.html',
  styleUrls: ['./num-gen.component.scss']
})
export class NumGenComponent implements OnInit {

  min = 1;
  max = 31;
  output = '';

  constructor() { }

  ngOnInit(): void {
    this.gen();
  }

  gen() {
    this.output = Array(this.max - this.min + 1).fill(1).map((_, i) => i + this.min)
      .map(it => `${it}`)
      .join('\t');
  }

}
