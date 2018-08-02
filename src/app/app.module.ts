import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionShowComponent } from './question-show/question-show.component';
import { QuestionGetComponent } from './question-get/question-get.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionShowComponent,
    QuestionGetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
