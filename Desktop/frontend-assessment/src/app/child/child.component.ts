import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() items: string[] = [];
  @Output() updatedItems = new EventEmitter<string[]>();
  newItemControl = new FormControl('');

  addItem(): void {
    if (this.newItemControl.value) {
      this.items.push(this.newItemControl.value);
      this.updatedItems.emit(this.items);
      this.newItemControl.reset();
    }
  }
}