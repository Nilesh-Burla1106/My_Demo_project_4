import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { BikesComponent } from './bikes/bikes.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,BikesComponent],
  template: `
    <app-bikes></app-bikes>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
