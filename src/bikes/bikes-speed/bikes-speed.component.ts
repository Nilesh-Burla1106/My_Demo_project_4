import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { bikesinfo } from '../bikes-full-details';
import { BikesHalfDetails } from '../bikes-half-details';
import { BikesSpeedLimitComponent } from './bikes-speed-limit/bikes-speed-limit.component';
@Component({
  standalone:true,
  selector: 'app-bikes-speed',
  templateUrl: './bikes-speed.component.html',
  styleUrls: ['./bikes-speed.component.css'],
  imports:[BikesSpeedLimitComponent,CommonModule],
})
export class BikesSpeedComponent implements OnInit {
  bikesspeed:BikesHalfDetails[]=[];
  constructor() { }

  ngOnInit() {
    this.bikesspeed=bikesinfo;
  }

}