import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise Revenue'
    },
    xAxis: {
      categories: [
        'Action',
        'Sports',
        'Puzzle',
        'RTS',
        'Other',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Action',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Sports',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Puzzle',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'RTS',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Other',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
