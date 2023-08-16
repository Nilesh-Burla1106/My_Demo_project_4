import { Component, Input, OnInit } from '@angular/core';
import { BikesHalfDetails } from '../bikes-half-details';

@Component({
  standalone:true,
  selector: 'app-bikes-details',
  templateUrl: './bikes-details.component.html',
  styleUrls: ['./bikes-details.component.css']
})
export class BikesDetailsComponent implements OnInit {
@Input()selectedBikesHalfDetails!:BikesHalfDetails; 
  constructor() { }

  ngOnInit() {
  }
ngOnchanges(){
  
}
}