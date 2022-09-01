import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  comment!: FormGroup;

  baseApiUrl = environment.baseApiUrl;
  faEdit = faEdit;
  faTimes = faTimes;
  totalComments: number = 0;
  private momentId!: number;

  constructor(
    private message: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private momentService: MomentService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.momentId = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(this.momentId).subscribe((item) => {
      const data = item.data;
      this.moment = data;
      this.totalComments = this.moment.comments?.length ? this.moment.comments.length : 0;
    });
    this.comment = new FormGroup({
      username: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      moment_id: new FormControl(this.momentId)
    });
  }

  get username() {
    return this.comment.get('username')!;
  }

  get text() {
    return this.comment.get('text')!;
  }

  async removeMoment(id: number) {
    await this.momentService.deleteMoment(id).subscribe((item) => {
      this.message.add(item.message!);
    });

    this.router.navigate(['/']);
  }

  async submitComment(formDirective: FormGroupDirective) {
    if (this.comment.invalid) return;

    await this.commentService.postComment(Number(this.moment!.id), this.comment.value).subscribe((item) => {
      const data = item.data;
      this.moment?.comments?.push(data);

      this.totalComments += 1;
      this.message.add(item.message!);
    });

    this.comment.reset();
    formDirective.resetForm();
  }
}
