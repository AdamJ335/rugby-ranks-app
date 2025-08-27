import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient } from "@angular/common/http"
import { providePrimeNG } from 'primeng/config'
import LaraDarkPurple from '@primeng/themes/lara'
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: LaraDarkPurple
      }
    })
  ]
}
