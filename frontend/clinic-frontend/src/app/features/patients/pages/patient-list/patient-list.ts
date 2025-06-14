import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './patient-list.html',
  styleUrls: ['./patient-list.scss']
})
export class PatientListComponent implements OnInit {
  patients = [
    { id: 1, name: 'Ana Torres', age: 25 },
    { id: 2, name: 'Luis Martínez', age: 32 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
