
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { LivePreviewComponent } from './components/live-preview/live-preview.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    FeaturesComponent,
    LivePreviewComponent,
    TestimonialsComponent,
    CallToActionComponent,
    FooterComponent
  ]
})
export class AppComponent {}
