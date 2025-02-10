import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-listing-card',
  templateUrl: './property-listing-card.component.html',
  styleUrls: ['./property-listing-card.component.css']
})
export class PropertyListingCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() image: string = '';
}