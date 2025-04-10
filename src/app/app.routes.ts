import { Routes } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';
import { ProfileComponent } from './main/pages/profile/profile.component';
import { SearchComponent } from './main/pages/search/search.component';
import { BookingComponent } from './main/pages/booking/booking.component';
import { TrainListComponent } from './main/pages/train-list/train-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'trains', component: TrainListComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }
  ];
