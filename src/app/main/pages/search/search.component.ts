import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  stations: string[] = [];
  from = '';
  to = '';
  date = '';
  passengers = 1;
  trains: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getStations().subscribe((data) => {
      this.stations = data.map((station: any) => station.name);
    });
  }

  onSubmit(): void {
    if (!this.from || !this.to || !this.date) return;
    this.api.searchTrains(this.from, this.to, this.date).subscribe((res) => {
      this.trains = res[0]?.trains || [];
    });
  }

  goToBooking(trainId: string): void {
    this.router.navigate(['/booking'], { queryParams: { trainId } });
  }
}
