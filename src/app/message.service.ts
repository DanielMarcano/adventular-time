import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(value: string): void {
    this.messages.push(value);
  }

  clear = () => this.messages = [];
}
