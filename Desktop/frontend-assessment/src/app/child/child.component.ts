import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <h3>Child Component</h3>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <button (click)="addItem()">Add Item</button>
  `,
  imports: [CommonModule]
})
export class ChildComponent {
  @Input() items: string[] = [];
  @Output() updatedItems = new EventEmitter<string[]>();

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
    this.updatedItems.emit(this.items);
  }
}
