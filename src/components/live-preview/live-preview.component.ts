
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Streamer {
  name: string;
  viewers: number;
  imageUrl: string;
  tags: string[];
}

@Component({
  selector: 'app-live-preview',
  templateUrl: './live-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class LivePreviewComponent {
  streamers = signal<Streamer[]>([
    { name: 'Sienna', viewers: 1850, imageUrl: 'https://i.ibb.co/gbxc3pP2/ca17f6ab-5106-4134-b45a-55bf3053cb20.png', tags: ['Chatting', 'Dancing'] },
    { name: 'Alex & Mia', viewers: 2400, imageUrl: 'https://i.ibb.co/Mk8s3n5J/e3f7229e-f9df-479a-a2a7-6ce4b3ec3d81.png', tags: ['Couples', 'Q&A'] },
    { name: 'Ryder', viewers: 980, imageUrl: 'https://i.ibb.co/fV9tW05z/2d603d7e-a13e-4cf0-8f06-6cecadf2f85e.png', tags: ['Music', 'Vibes'] },
    { name: 'Jasmine', viewers: 3100, imageUrl: 'https://i.ibb.co/Fqf09hsP/67b8d531db19e8716821372f8e2b3636.jpg', tags: ['New', 'Just Chatting'] }
  ]);
}
