import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() galleryData: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  data: Item[] = [
    {
      imageSrc: '../../../assets/yolo_1.png',
      imageAlt: '1',
      imageWidth: '800',
      imageHeight: '300'
    },
    {
      imageSrc: '../../../assets/yolo_2.jpg',
      imageAlt: '2',
      imageWidth: '400',
      imageHeight: '400'
    },
    {
      imageSrc: '../../../assets/yolo_3.jpg',
      imageAlt: '3',
      imageWidth: '800',
      imageHeight: '650'
    },
    {
      imageSrc: '../../../assets/yolo_4.jpg',
      imageAlt: '4',
      imageWidth: '650',
      imageHeight: '600'
    },
    {
      imageSrc: '../../../assets/yolo_5.jpg',
      imageAlt: '5',
      imageWidth: '400',
      imageHeight: '400'
    },
    {
      imageSrc: '../../../assets/yolo_6.jpg',
      imageAlt: '6',
      imageWidth: '450',
      imageHeight: '400'
    },
    {
      imageSrc: '../../../assets/yolo_7.jpg',
      imageAlt: '7',
      imageWidth: '500',
      imageHeight: '500'
    },
    {
      imageSrc: '../../../assets/yolo_8.jpg',
      imageAlt: '8',
      imageWidth: '700',
      imageHeight: '600'
    },
    {
      imageSrc: '../../../assets/yolo_9.jpg',
      imageAlt: '9',
      imageWidth: '600',
      imageHeight: '450'
    },
    {
      imageSrc: '../../../assets/yolo_10.jpg',
      imageAlt: '10',
      imageWidth: '400',
      imageHeight: '400'
    },
    {
      imageSrc: '../../../assets/yolo_11.jpg',
      imageAlt: '11',
      imageWidth: '400',
      imageHeight: '400'
    },
    {
      imageSrc: '../../../assets/yolo_12.jpg',
      imageAlt: '12',
      imageWidth: '400',
      imageHeight: '400'
    }
  ];
}
