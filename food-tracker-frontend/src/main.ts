import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

// Bootstrap the standalone component
bootstrapApplication(AppComponent).catch(err => console.error(err));
