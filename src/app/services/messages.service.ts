import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message?: string;

  constructor() {}

  add(msg: string): void {
    this.message = msg;

    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear(): void {
    this.message = '';
  }
}
