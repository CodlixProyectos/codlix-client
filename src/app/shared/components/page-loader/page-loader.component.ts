import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-loader" [class.fade-out]="isLoaded">
      <div class="loader-content">
        <div class="loader-logo">
          <div class="logo-circle"></div>
          <div class="logo-pulse"></div>
        </div>
        <h1 class="loader-text">CODLIX</h1>
        <div class="loader-bar">
          <div class="loader-progress"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      transition: opacity 0.8s ease, visibility 0.8s ease;
      pointer-events: none;
    }

    .page-loader:not(.fade-out) {
      pointer-events: all;
    }

    .page-loader.fade-out {
      opacity: 0;
      visibility: hidden;
    }

    .loader-content {
      text-align: center;
    }

    .loader-logo {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 0 auto 30px;
    }

    .logo-circle {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 8px solid rgba(255, 255, 255, 0.2);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    }

    .logo-pulse {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0.8;
      }
      50% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    .loader-text {
      font-size: 3rem;
      font-weight: 900;
      color: white;
      letter-spacing: 0.5rem;
      margin-bottom: 40px;
      animation: glow 2s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                     0 0 40px rgba(255, 255, 255, 0.3);
      }
      50% {
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
                     0 0 60px rgba(255, 255, 255, 0.5),
                     0 0 80px rgba(255, 255, 255, 0.3);
      }
    }

    .loader-bar {
      width: 300px;
      height: 4px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      overflow: hidden;
      margin: 0 auto;
    }

    .loader-progress {
      height: 100%;
      background: linear-gradient(90deg,
        rgba(255, 255, 255, 0.8) 0%,
        white 50%,
        rgba(255, 255, 255, 0.8) 100%);
      border-radius: 10px;
      animation: loading 2s ease-in-out infinite;
    }

    @keyframes loading {
      0% {
        width: 0%;
        margin-left: 0%;
      }
      50% {
        width: 80%;
        margin-left: 10%;
      }
      100% {
        width: 0%;
        margin-left: 100%;
      }
    }
  `]
})
export class PageLoaderComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
    // Simula carga y oculta el loader después de 2.5 segundos
    setTimeout(() => {
      this.isLoaded = true;
    }, 2500);
  }
}
