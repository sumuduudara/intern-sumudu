import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messagesSubject = new BehaviorSubject<string[]>([]);
  messages$ = this.messagesSubject.asObservable();

  add(message: string): void {
    const current = this.messagesSubject.value;
    this.messagesSubject.next([message, ...current]);
  }

  clear(): void {
    this.messagesSubject.next([]);
  }

  get messages(): string[] {
    return this.messagesSubject.value;
  }
}
