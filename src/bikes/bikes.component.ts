import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { BikesHalfDetails } from './bikes-half-details';
import { BikesSpeedComponent } from './bikes-speed/bikes-speed.component';

@Component({
  standalone:true,
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  imports:[BikesSpeedComponent,BikesDetailsComponent,CommonModule]
})
export class BikesComponent implements OnInit {
  bikesspeed:BikesHalfDetails[]=BIKESSPEED
  constructor() { }

  ngOnInit() {
  }

}