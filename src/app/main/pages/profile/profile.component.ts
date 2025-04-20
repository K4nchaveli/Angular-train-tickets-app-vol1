import { Component } from '@angular/core';
import { cookie_services } from '../../services/cookie.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private _cookie:cookie_services){
  }

  ngOnInit(){
    this._cookie.setCookie();
  }
}
