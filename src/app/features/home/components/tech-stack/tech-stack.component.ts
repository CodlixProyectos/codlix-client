import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html'
})
export class TechStackComponent {
  techs = [
    { name: 'Angular', icon: 'https://angular.io/assets/images/logos/angular/angular.svg', category: 'Frontend' },
    { name: 'Spring Boot', icon: 'https://spring.io/img/projects/spring-boot.svg', category: 'Backend' },
    { name: 'Java', icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg', category: 'Backend' },
    { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg', category: 'Database' },
    { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', category: 'Cloud' },
    { name: 'Docker', icon: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', category: 'DevOps' }
  ];
}
