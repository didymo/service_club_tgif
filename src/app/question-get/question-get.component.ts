import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-get',
  templateUrl: './question-get.component.html',
  styleUrls: ['./question-get.component.css']
})
export class QuestionGetComponent implements OnInit {
  question: question;

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(): void {
    this.questionService.getQuestion()
      .subscribe(question => this.question = question);
  }


}
