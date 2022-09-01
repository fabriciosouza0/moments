import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl!: string;

  constructor(private http: HttpClient) { }

  postComment(momentId: number, comment: FormData): Observable<Response<never>> {
    this.apiUrl = `${this.baseApiUrl}api/moments/${momentId}/comments`
    return this.http.post<Response<never>>(this.apiUrl, comment);
  }
}
