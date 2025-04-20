import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cookie_services } from '../../services/cookie.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private _cookie: cookie_services,
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  searchForm!: FormGroup;
  stations: any[] = [];
  departures: any[] = [];

  selectTrain(trainId: string) {
    const passengers = this.searchForm.value.passengers;
    this.router.navigate(['/booking'], {
      queryParams: {
        trainId: trainId,
        passengers: passengers
      }
    });
  }

  ngOnInit() {
    this._cookie.getCookie();
    console.log(this._cookie.getCookie());

    this.searchForm = this.fb.group({
      from: [''],
      to: [''],
      date: [''],
      passengers: ['']
    });

    this.api.getStations().subscribe({
      next: (data: any) => {
        console.log('მიმიღე სადგურები:', data);
        this.stations = data;
      },
      error: (err) => console.error('სადგურების ვერ გამოიტანა:', err),
    });
  }

  onSearch() {
    const from = this.searchForm.value.from;
    const to = this.searchForm.value.to;
    const date = this.searchForm.value.date;

    if (from && to && date) {
      this.api.getDepartures(from, to, date).subscribe({
        next: (data: any) => {
          this.departures = data;
        },
        error: (err) => console.error(err),
      });
    }
  }
}




