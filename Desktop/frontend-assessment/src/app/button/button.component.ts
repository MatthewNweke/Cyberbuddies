import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
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
    this.onClick.emit();
    console.log('Button clicked!');
  }
}