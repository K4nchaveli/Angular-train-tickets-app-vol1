import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './main/components/footer/footer.component';
import { HeaderComponent } from './main/components/header/header.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule,RouterOutlet,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}