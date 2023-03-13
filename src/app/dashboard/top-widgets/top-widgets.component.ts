import { Component, OnInit } from '@angular/core';
// import {
//   faLocation,
//   faShop,
//   faBoxes,
//   faMoneyBill,
// } from '@fortawesome/free-solid-svg-icons';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string
}

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

  // faLocation = faLocation;
  // faShop = faShop;
  // faBoxes = faBoxes;
  // faMoneyBill = faMoneyBill;

  // tiles: Tile[] = [
  //   {text: 'Games', cols: 3, rows: 1, color: 'rgb(214, 212, 223)', image: '../../../assets/yolo_1.png'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'rgb(228, 226, 235)', image: '../../../assets/yolo_1.png'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'rgb(237, 225, 233)', image: '../../../assets/yolo_1.png'},
  //   {text: 'Four', cols: 2, rows: 1, color: 'rgb(238, 238, 245)', image: '../../../assets/yolo_1.png'},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
