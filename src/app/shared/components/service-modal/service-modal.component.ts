import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  benefits: string[];
}

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.css']
})
export class ServiceModalComponent {
  @Input() isOpen = false;
  @Input() service: Service | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() contactUs = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onContactUs() {
    this.contactUs.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
