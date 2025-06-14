import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './doctor-form.html',
  styleUrls: ['./doctor-form.scss']
})
export class DoctorFormComponent {
  doctorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      specialty: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.doctorForm.invalid) {
      return;
    }

    this.http.post('http://localhost:8081/api/doctors', this.doctorForm.value).subscribe({
      next: () => {
        alert('Doctor registrado correctamente');
        this.router.navigate(['/doctors']);
      },
      error: () => {
        alert('Error al registrar doctor');
      }
    });
  }
}
