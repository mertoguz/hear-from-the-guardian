import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { SpeechSynthesisService } from './services/speech-synthesis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title: string = 'hear-from-the-guardian';
  newsList: Array<News> = [];
  selectedNews: Object;
  error: String = '';

  constructor (
    private newsService: NewsService,
    private speechSynthesisService: SpeechSynthesisService
  ) {}

  ngOnInit() {
    this.newsService.getLatestNews()
      .subscribe(response => {
        this.newsList = response.response.results;
        this.selectedNews = this.newsList[0].webTitle;
      }, err => {
        this.error = err;
      });
  }

  speechTheSelectedNews() {
      this.speechSynthesisService.speak(this.selectedNews);
  }
}

interface News {
  webTitle: String
}
