import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://railway.stepprojects.ge/api';

  constructor(private http: HttpClient) {}

  getAllStations() {
    return this.http.get(`${this.baseUrl}/stations`);
  }

  searchTrains(fromId: number, toId: number, date: string) {
    return this.http.get(`${this.baseUrl}/trains`, {
      params: { fromStationId: fromId, toStationId: toId, date }
    });
  }

}

