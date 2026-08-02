import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/message';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
