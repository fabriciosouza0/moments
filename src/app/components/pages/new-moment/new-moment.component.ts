import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  btnText: string = 'Compartilhar!';
  message?: string;

  constructor(
    private messageService: MessagesService,
    private momentService: MomentService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    this.momentService.postMoment(formData).subscribe();

    this.messageService.add('Momento adicionando com sucesso!');

    this.route.navigate(['/']);
  }
}
