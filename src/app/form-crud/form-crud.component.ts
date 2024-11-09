import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedDataService } from '../Services/shared-data.service';

@Component({
  selector: 'app-form-crud',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-crud.component.html',
  styleUrl: './form-crud.component.scss',
})
export class FormCrudComponent {
  userForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
    ]),
    address: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  });

  constructor(private sharedserve: SharedDataService) {}

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      this.sharedserve.AddData(this.userForm.getRawValue());
      this.userForm.reset();
    } else {
      console.log('Form is invalid');
      this.userForm.markAllAsTouched();
    }
  }
}
