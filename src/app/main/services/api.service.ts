// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
// export class ApiService {
 

//   constructor(private http: HttpClient) {}

//   getStations() {
//     return this.http.get('https://railway.stepprojects.ge/api/Station');
//   }
  
//   getDepartures(from: string, to: string, date: string) {
//     return this.http.get(
//       `https://railway.stepprojects.ge/api/Departure?from=${from}&to=${to}&date=${date}`
//     );
//   }

//   getTrainDetails(trainId: string) {
//     return this.http.get(
//       `https://railway.stepprojects.ge/api/Train/${trainId}`
//     );
//   }


// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getDepartures(from: any, to: any, date: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getStations(): Observable<any> {
    return this.http.get('https://railway.stepprojects.ge/api/stations');
  }

  searchTrains(from: string, to: string, date: string): Observable<any> {
    return this.http.get(`https://railway.stepprojects.ge/api/getdeparture?from=${from}&to=${to}&date=${date}`);
  }

  getVagon(trainId: string): Observable<any> {
    return this.http.get(`https://railway.stepprojects.ge/api/getvagon/${trainId}`);
  }

  registerTickets(data: any): Observable<any> {
    return this.http.post(`https://railway.stepprojects.ge/api/tickets/register`, data);
  }
}

