import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/common-app.config';
import { CommonAppComponent } from './app/common-app.component';

bootstrapApplication(CommonAppComponent, appConfig)
  .catch((err) => console.error(err));
