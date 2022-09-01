import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  faTimes = faTimes;

  constructor(public messageService: MessagesService) {}

  ngOnInit(): void {}

  clear() {
    this.messageService.clear();
  }
}
