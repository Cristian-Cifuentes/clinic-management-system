import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './doctor-list.html',
  styleUrls: ['./doctor-list.scss']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Doctor[]>('http://localhost:8081/api/doctors').subscribe({
      next: (data) => {
        this.doctors = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Error al cargar doctores');
      }
    });
  }
}
