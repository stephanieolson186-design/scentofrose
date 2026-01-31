import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  imageUrl: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      name: 'Jessica L.',
      location: 'New York, NY',
      quote: 'I was tired of superficial apps. scentofrose is different. I\'ve made more genuine connections here in a month than I did in a year elsewhere.',
      imageUrl: 'https://picsum.photos/100/100?random=5'
    },
    {
      name: 'Mark P.',
      location: 'Austin, TX',
      quote: 'The live streaming feature is a game-changer. It\'s a fun, low-pressure way to meet new people and show your true self.',
      imageUrl: 'https://picsum.photos/100/100?random=6'
    },
    {
      name: 'Chloe & Ben',
      location: 'Los Angeles, CA',
      quote: 'As a couple, we\'ve found an amazing community here. Everyone is so open-minded and respectful. Highly recommend!',
      imageUrl: 'https://picsum.photos/100/100?random=7'
    }
  ]);
}