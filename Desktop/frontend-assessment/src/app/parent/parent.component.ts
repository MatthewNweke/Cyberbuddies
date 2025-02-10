import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  items: string[] = [];
  newItemControl = new FormControl('');

  addItem(): void {
    if (this.newItemControl.value) {
      this.items.push(this.newItemControl.value);
      this.newItemControl.reset();
    }
  }

  updateItems(updatedItems: string[]): void {
    this.items = updatedItems;
  }
}