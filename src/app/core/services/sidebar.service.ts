import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isExpanded = signal(false);
  isMobile = signal(window.innerWidth < 1024);

  expand() {
    this.isExpanded.set(true);
  }

  collapse() {
    this.isExpanded.set(false);
  }

  toggle() {
    this.isExpanded.update(value => !value);
  }

  updateMobileStatus() {
    this.isMobile.set(window.innerWidth < 1024);
  }
}
