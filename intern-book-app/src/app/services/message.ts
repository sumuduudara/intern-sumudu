import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void {
    console.log('ADD:', message);
    this.messages.unshift(message);
    console.log(this.messages);
  }

  clear(): void {
    this.messages = [];
  }
}
