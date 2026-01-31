import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  template: `
    <a href="/" class="flex items-center space-x-3 group cursor-pointer" aria-label="scentofrose homepage">
      <div class="p-1.5 rounded-full bg-pink-600/20 group-hover:bg-pink-600/30 transition-colors duration-300">
        <svg [class]="'text-pink-500 ' + sizeClass()"
             xmlns="http://www.w3.org/2000/svg" 
             fill="currentColor" 
             viewBox="0 0 256 256">
             <path d="M223.49,113.19a8,8,0,0,0-9.62-7.15l-33,8.25c-11.83,3-23,8.79-33,16.48-10.74-8.24-22.9-14.33-36-17.26V80a40,40,0,0,1,80,0,8,8,0,0,0,16,0,56,56,0,0,0-112,0v33.51c-13.1,2.93-25.26,9-36,17.26-10-7.69-21.17-13.51-33-16.48l-33-8.25a8,8,0,0,0-9.62,7.15,7.9,7.9,0,0,0,6.07,8.68l33,8.25c8.39,2.1,16.29,5.7,23.38,10.63-4.14,6.06-7,13-8.26,20.65L32.51,180a8,8,0,0,0,4.24,9.22,8.08,8.08,0,0,0,9.22-4.24l19.16-38.33c2.23-4.45,4.89-8.68,7.91-12.63,8.4,5,18,8.23,28.24,9.45a52,52,0,0,0,49.46-72.36,8,8,0,0,0-15-5.46,36,36,0,0,1-34.12,50,4,4,0,0,1-3.6-4.66c.49-1.92,1-3.8,1.55-5.69,7.74-2.83,14.79-7.26,20.88-13.06,7.1,4.93,15,8.53,23.38,10.63l33,8.25a7.9,7.9,0,0,0,6.07-8.68c-1.25-7.64-4.12-14.59-8.26-20.65C185,142.32,203.88,129.62,217.42,121.84Z"></path>
        </svg>
      </div>
      <span class="text-white font-semibold tracking-wide group-hover:text-pink-100 transition-colors" [class.text-2xl]="size() === 'large'" [class.text-xl]="size() === 'medium'">
        scentofrose
      </span>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class LogoComponent {
  size = input<'large' | 'medium'>('large');

  sizeClass(): string {
    return this.size() === 'large' ? 'w-8 h-8' : 'w-7 h-7';
  }
}