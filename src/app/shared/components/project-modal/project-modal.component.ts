import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html'
})
export class ProjectModalComponent {
  @Input() isOpen = false;
  @Input() projectName = '';
  @Input() projectUrl = '';
  @Output() close = new EventEmitter<void>();
  @Output() openProject = new EventEmitter<void>();
  @Output() scheduleCall = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onOpenProject() {
    this.openProject.emit();
  }

  onScheduleCall() {
    this.scheduleCall.emit();
  }
}
