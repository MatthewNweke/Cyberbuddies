import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  template: `
    <h2>Parent Component</h2>
    <app-child [items]="items" (updatedItems)="updateItems($event)"></app-child>
  `,
  imports: [CommonModule, ChildComponent]
})
export class ParentComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  updateItems(newItems: string[]) {
    this.items = newItems;
  }
}
