import { bootstrapApplication } from '@angular/platform-browser';
import type { ApplicationConfig } from '@angular/core';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context?: Partial<ApplicationConfig>) =>
  bootstrapApplication(App, { ...config, ...context });

export default bootstrap;
