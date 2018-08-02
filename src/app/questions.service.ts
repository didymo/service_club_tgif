import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuestionsService {

  private api  = 'http://bluemaxstudios.com/questionnaire/questions?_format=json';
  private quesions;

  constructor(
    private http: HttpClient) {
    const headers = {'headers': new HttpHeaders({'content-type': 'application/json',
        'Authorization': 'Basic ZnJvbnRlbmQ6cmVzdDEyMw==' })};
    this.http.get( this.api, headers ).subscribe((this.questions) => console.log(this.questions)); }

  /** GET heroes from the server */
  getQuestion (): Observable<question> {
    return this.questions };
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */


}
