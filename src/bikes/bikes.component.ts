import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { BikesHalfDetails } from './bikes-half-details';
import { BikesSpeedComponent } from './bikes-speed/bikes-speed.component';
import {BIKESSPEED} from './bikes-full-details'

@Component({
  standalone:true,
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  imports:[BikesSpeedComponent,BikesDetailsComponent]
})
export class BikesComponent implements OnInit {
  bikesspeed:BikesHalfDetails[]=BIKESSPEED;
  constructor() { }
  selectedBikesHalfDetails!:BikesHalfDetails;
  ngOnInit() {
  }
OnBikesHalfDetailsselected(bikeshalfdetails:BikesHalfDetails){
  console.log(event);
  this.selectedBikesHalfDetails=bikeshalfdetails;
}
}