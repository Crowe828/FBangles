import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: any[] = [
    'https://blogs.3ds.com/northamerica/wp-content/uploads/sites/4/2019/08/Robots-Square.jpg',
    'https://scx2.b-cdn.net/gfx/news/hires/2019/3-robot.jpg',
    'https://spectrum.ieee.org/image/MzY4MjM4MA.jpeg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
