import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {
  protected readonly title = signal('Codlyp-client');

  constructor() {}

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
      offset: 100
    });
  }
}
