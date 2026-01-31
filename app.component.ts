
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { LiveStreamsComponent } from './components/live-streams/live-streams.component';
import { DatingProfilesComponent } from './components/dating-profiles/dating-profiles.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    HowItWorksComponent,
    LiveStreamsComponent,
    DatingProfilesComponent,
    TestimonialsComponent,
    FooterComponent
  ]
})
export class AppComponent {}
