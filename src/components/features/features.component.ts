
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class FeaturesComponent {
  features = signal<Feature[]>([
    {
      icon: 'ph-video-camera',
      title: 'HD Live Streaming',
      description: 'Broadcast and watch crystal-clear live streams from creators around the world.'
    },
    {
      icon: 'ph-chats-circle',
      title: 'Private Messaging',
      description: 'Connect one-on-one with secure, private chat designed for real conversations.'
    },
    {
      icon: 'ph-shield-check',
      title: 'Verified Profiles',
      description: 'Interact with confidence. Our users are verified for a safer, more authentic experience.'
    },
    {
      icon: 'ph-magnifying-glass',
      title: 'Advanced Search',
      description: 'Find exactly who you\'re looking for with powerful filters and detailed search criteria.'
    }
  ]);
}
