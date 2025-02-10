import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() inputType: string = 'text';
  @Input() placeholder: string = '';
  @Input() formControl: FormControl = new FormControl();
  errorMessage: string = '';

  validateInput(): void {
    if (this.inputType === 'email' && !this.formControl.value.includes('@')) {
      this.errorMessage = 'Invalid email address';
    } else if (this.inputType === 'number' && isNaN(this.formControl.value)) {
      this.errorMessage = 'Invalid number';
    } else {
      this.errorMessage = '';
    }
  }
}