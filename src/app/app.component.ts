import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title: string = 'hear-from-the-guardian';
  newsList: Array<News> = [];
  selectedNews: Object;

  constructor (private newsService: NewsService) {

  }

  ngOnInit() {
    this.newsService.getLatestNews()
      .subscribe(response => {
        this.newsList = response.response.results;
        this.selectedNews = this.newsList[0].webTitle;
      }, err => {
        console.log(err);
      })
  }
}

interface News {
  webTitle: String
}
