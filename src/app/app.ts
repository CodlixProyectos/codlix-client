import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';
import { SidebarService } from './core/services/sidebar.service';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {
  protected readonly title = signal('codlix-client');

  constructor(public sidebarService: SidebarService) {}

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
