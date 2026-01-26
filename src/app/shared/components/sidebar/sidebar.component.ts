import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  isExpanded = false;
  isMobileMenuOpen = false;

  expandSidebar() {
    this.isExpanded = true;
  }

  collapseSidebar() {
    this.isExpanded = false;
  }

  toggleMobileSidebar() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.isExpanded = true;
    }
  }

  closeMobileSidebar() {
    this.isMobileMenuOpen = false;
    this.collapseSidebar();
  }

  onLinkClick() {
    // En mobile, cerrar el sidebar al hacer click en un link
    if (window.innerWidth < 1024) {
      this.closeMobileSidebar();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const sidebar = document.querySelector('aside');
    const hamburgerButton = target.closest('button');

    // Solo colapsar en desktop cuando se hace click fuera
    if (window.innerWidth >= 1024) {
      if (sidebar && !sidebar.contains(target) && !hamburgerButton) {
        this.collapseSidebar();
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    // Cerrar mobile menu si se redimensiona a desktop
    if (window.innerWidth >= 1024) {
      this.isMobileMenuOpen = false;
    }
  }
}
