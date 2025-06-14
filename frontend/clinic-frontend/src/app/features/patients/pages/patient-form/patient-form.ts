import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-form.html',
  styleUrls: ['./patient-form.scss']
})
export class PatientFormComponent {
  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      address: [''],
    });
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      console.log('Paciente guardado:', this.patientForm.value);
      alert('Paciente guardado correctamente');
      this.router.navigate(['/patients']);
    }
  }
}
