// booking.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  trainId!: string;
  vagonData: any;
  selectedSeats: any[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.trainId = params['trainId'];
      if (this.trainId) {
        this.api.getVagon(this.trainId).subscribe((data) => {
          this.vagonData = data[0];
        });
      }
    });
  }

  toggleSeat(seat: any) {
    // ლოგიკა ადგილის არჩევისთვის
  }

  confirmBooking() {
    // ადგილის დადასტურება
  }
}
