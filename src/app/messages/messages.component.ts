import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10000px)'}),
        animate('.5s linear', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({ opacity: 0, transform: 'translateX(10000px)' }))
      ]),
    ])
  ]
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
