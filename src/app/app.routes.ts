import { Routes } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';
import { ProfileComponent } from './main/pages/profile/profile.component';
import { SearchComponent } from './main/pages/search/search.component';
import { BookingComponent } from './main/pages/booking/booking.component';
import { TrainListComponent } from './main/pages/train-list/train-list.component';

export const routes: Routes = [
    { path:'', redirectTo:'home',pathMatch:'full'},
    { path: 'home', component: HomeComponent ,title:'home'},
    { path: 'search', component: SearchComponent ,title:'search'},
    { path: 'trains', component: TrainListComponent ,title:'search'},
    { path: 'booking', component: BookingComponent ,title:'search'},
    { path: 'profile', component: ProfileComponent ,title:'search'},
    { path: '**', redirectTo: '' }
  ];
