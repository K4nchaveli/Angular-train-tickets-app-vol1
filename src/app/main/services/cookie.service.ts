import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class cookie_services {

  constructor(private cookieServices: CookieService) { }

  setCookie(){
    this.cookieServices.set('token','123jjj',1);

  }

  deleteCookie(){
    this.cookieServices.delete('token')
  }

  getCookie(){
   return this.cookieServices.get('token')
  }
}
