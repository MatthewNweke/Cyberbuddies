import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for currency pipe

@Component({
  selector: 'app-property-listing-card',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <div class="card property-card shadow-lg">
      <!-- Property Image -->
      <div class="position-relative">
        <img [src]="image" class="card-img-top" alt="Property Image">
        <span class="badge property-status">{{ status }}</span>
      </div>

      <div class="card-body">
        <!-- Title -->
        <h5 class="card-title text-primary fw-bold">{{ title }}</h5>

        <!-- Description -->
        <p class="card-text text-muted">{{ description }}</p>

        <!-- Price -->
        <p class="card-text price"><strong>Price:</strong> {{ price | currency:'NGN' }}</p>

        <!-- Call-to-action buttons -->
        <div class="d-grid gap-2">
          <button class="btn btn-outline-primary">View Details</button>
          <button class="btn btn-primary">Contact Agent</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .property-card { border-radius: 10px; overflow: hidden; }
    .property-status { position: absolute; top: 10px; left: 10px; background: #ff5733; color: white; padding: 5px 10px; border-radius: 5px; }
    .price { font-weight: bold; color: green; }
  `]
})
export class PropertyListingCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() image!: string;
  @Input() status!: string;
}
