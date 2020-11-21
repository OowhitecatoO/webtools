import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './num-gen.component.html',
  styleUrls: ['./num-gen.component.scss']
})
export class NumGenComponent implements OnInit {

  min = 1;
  max = 31;
  startAt = 2;

  output = '';
  display: any[][] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.gen();
  }

  gen() {
    const source = Array<number>(this.max - this.min + 1 + this.startAt).fill(0)
      .map((_, i) =>
        i < this.startAt
          ? 0 : i + this.min - this.startAt
      )
      .map(it => it === 0 ? '' : `${it}`);

    this.output = source
      .map((it, i) =>
        i % 7 === 0
          ? `\t${it}` : it
      ).join('\t');

    this.display = source.reduce((arr: any[][], it, i) => {
      i % 7 === 0 ? arr.push([it]) : arr[arr.length - 1].push(it);
      return arr;
    }, []);
  }

  nextMonth() {
    this.startAt = this.display[this.display.length - 1].length % 7;
    this.gen();
  }

}
