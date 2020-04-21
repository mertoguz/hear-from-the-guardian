import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class NewsService {
    private THE_GUARDIAN_API_BASE_URL:
        string = `https://content.guardianapis.com/search?api-key=${this.API_KEY}`;

    private getRequestOptions = {
        //fetch only world news
        params: new HttpParams().set('section', 'world'),
    }

    news: News;

    constructor(
        @Inject('THE_GUARDIAN_API_KEY') private API_KEY,
        private http: HttpClient
    ) {}

    getLatestNews(): Observable<NewsListResponse> {
        return this.http.get<NewsListResponse>(this.THE_GUARDIAN_API_BASE_URL, this.getRequestOptions);
    }
}

interface NewsListResponse {
    response: NewsResult
}

interface NewsResult {
    results: Array<News>
}

interface News {
    webTitle: String
}