import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent]
})
export class HeroComponent {}