import { Component, Input } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
   <h1 class="my-3"> The input field Component</h1>
    <div class="mt-20">
      <label *ngIf="label" class="form-label">{{ label }}</label>
      <input 
        [type]="type" 
        [placeholder]="placeholder" 
        [formControl]="inputControl"
        class="form-control"
        [ngClass]="{'is-invalid': inputControl.invalid && inputControl.touched}"
      >
      <div *ngIf="inputControl.invalid && inputControl.touched" class="invalid-feedback">
        {{ getErrorMessage() }}
      </div>
    </div>
  `,
  styles: [`
    .form-control {
      font-size: 16px;
      padding: 12px;
      border-radius: 8px;
    }
    .invalid-feedback {
      font-size: 14px;
    }
  `]
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Enter text';
  @Input() label: string = '';  // Optional label

  inputControl = new FormControl('', [Validators.required]);

  getErrorMessage(): string {
    return this.inputControl.hasError('required') ? 'This field is required' : '';
  }
}
