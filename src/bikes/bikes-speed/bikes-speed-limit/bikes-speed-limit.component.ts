import { Component, Input, OnInit } from '@angular/core';
import { BikesHalfDetails } from '../../bikes-half-details';
@Component({
  standalone:true,
  selector: 'app-bikes-speed-limit',
  templateUrl: './bikes-speed-limit.component.html',
  styleUrls: ['./bikes-speed-limit.component.css']
})
export class BikesSpeedLimitComponent implements OnInit {
  @Input() bikesHalfDetails!:BikesHalfDetails;
  constructor() { }

  ngOnInit() {
  }

}