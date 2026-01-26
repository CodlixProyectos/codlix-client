import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  isExpanded = false;
  isMobileMenuOpen = false;
  isMobile = window.innerWidth < 1024;

  constructor(private sidebarService: SidebarService) {}

  expandSidebar() {
    this.isExpanded = true;
    if (this.isMobile) {
      this.isMobileMenuOpen = true;
    } else {
      this.sidebarService.expand();
    }
  }

  collapseSidebar() {
    this.isExpanded = false;
    if (this.isMobile) {
      this.isMobileMenuOpen = false;
    } else {
      this.sidebarService.collapse();
    }
  }

  toggleMobileSidebar() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isExpanded = this.isMobileMenuOpen;
  }

  closeMobileSidebar() {
    this.isMobileMenuOpen = false;
    this.isExpanded = false;
  }

  onLinkClick() {
    // En mobile, cerrar el sidebar al hacer click en un link
    if (this.isMobile) {
      this.closeMobileSidebar();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const sidebar = document.querySelector('aside');
    const hamburgerButton = target.closest('button');

    // Solo colapsar en desktop cuando se hace click fuera
    if (!this.isMobile) {
      if (sidebar && !sidebar.contains(target) && !hamburgerButton) {
        this.collapseSidebar();
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 1024;

    // Cerrar mobile menu si se redimensiona a desktop
    if (!this.isMobile) {
      this.isMobileMenuOpen = false;
      this.isExpanded = false;
    }
  }
}
