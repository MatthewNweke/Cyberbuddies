import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true, // Important for standalone apps
  imports: [CommonModule], // Import CommonModule for template directives
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string = 'Click Me';
  @Input() buttonStyle: 'primary' | 'secondary' | 'danger' = 'primary';
  @Output() onClick = new EventEmitter<void>();

  get buttonClass(): string {
    return `btn btn-${this.buttonStyle}`;
  }

  handleClick(): void {
    this.onClick.emit(); // Emit event to parent
    console.log('Button clicked inside ButtonComponent!');
  }
}
