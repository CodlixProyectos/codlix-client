import { Component } from '@angular/core';
import { LucideAngularModule, Search, ClipboardList, Code2, CheckCircle2, Rocket, Wrench, BarChart3, MessageSquare, Activity } from 'lucide-angular';

@Component({
  selector: 'app-work-process',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './work-process.component.html'
})
export class WorkProcessComponent {
  // Iconos para los pasos del proceso
  readonly searchIcon = Search;
  readonly clipboardIcon = ClipboardList;
  readonly codeIcon = Code2;
  readonly checkIcon = CheckCircle2;
  readonly rocketIcon = Rocket;
  readonly wrenchIcon = Wrench;

  // Iconos para la sección de transparencia
  readonly chartIcon = BarChart3;
  readonly messageIcon = MessageSquare;
  readonly activityIcon = Activity;
}
