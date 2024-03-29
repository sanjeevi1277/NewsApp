import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  api_key: string = environment.news_api.api_key;
  getNewsByCountryAndCategory(country: string, category: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
        this.api_key
      }`
    );
  }

  getSourceByCountry(country: string, category: string) {
    return this.http.get(
      `https://newsapi.org/v2/sources?country=${country}&category=${category}&apiKey=${
        this.api_key
      }`
    );
  }

  getNewsBySource(source: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${
        this.api_key
      }`
    );
  }
}
