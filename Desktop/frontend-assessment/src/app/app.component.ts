import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { PropertyListingCardComponent } from './property-listing-card/property-listing-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ButtonComponent, InputFieldComponent, PropertyListingCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  error: string = '';
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        console.log('Fetched Data:', response); // Debugging
        if (Array.isArray(response)) {
          this.data = response.map(item => ({
            ...item,
            price: Number(item.price) // Ensure price is a number
          }));
        } else {
          console.error('Unexpected data format:', response);
          this.data = [];
        }
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Failed to fetch data';
        this.isLoading = false;
      }
    );
  }

  handleButtonClick(): void {
    console.log('Button clicked from AppComponent!');
    alert('Button clicked!');
  }
}
