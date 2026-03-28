import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectModalComponent } from '../../../../shared/components/project-modal/project-modal.component';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  category: string;
}

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './portfolio-page.component.html'
})
export class PortfolioPageComponent {
  isModalOpen = false;
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      name: 'Ubicatee',
      description: 'Sistema de gestión y seguimiento de ubicaciones en tiempo real con autenticación y panel de administración.',
      image: '/ubicatee.png',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      demoUrl: 'https://ubicatee.netlify.app/auth/login',
      category: 'Web App'
    },
    {
      id: 2,
      name: 'RESTO DEV',
      description: 'Plataforma SaaS integral para la gestión de restaurantes, incluyendo control de inventario, facturación electrónica y analíticas en tiempo real.',
      image: '/restodev.png',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      demoUrl: 'https://app.codlyp.website/',
      category: 'SaaS Platform'
    }
  ];

  constructor(private router: Router) {}

  openProjectModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openProject() {
    if (this.selectedProject) {
      window.open(this.selectedProject.demoUrl, '_blank');
      this.closeModal();
    }
  }

  scheduleCall() {
    this.closeModal();
    this.router.navigate(['/contact']);
  }
}
