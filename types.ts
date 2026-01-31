
// Added React import to fix 'Cannot find namespace React' error for React.ReactNode on line 16
import React from 'react';

export interface Streamer {
  id: string;
  name: string;
  age: number;
  location: string;
  viewers: number;
  imageUrl: string;
  isLive: boolean;
  tags: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  user: string;
  quote: string;
  rating: number;
}
