import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class QuestionsService {
  private api  = 'http://bluemaxstudios.com/questionnaire/questions?_format=json';
  constructor(private http: HttpClient) {}
  getQuestion() {
    const headers = {
      'headers': new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Basic ZnJvbnRlbmQ6cmVzdDEyMw=='
      })
    };
    this.http.get(this.api, headers).subscribe((questions) => console.log(questions));
  }
}
