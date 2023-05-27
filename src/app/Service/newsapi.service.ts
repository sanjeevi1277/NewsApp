import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  newsapiURL="https://newsapi.org/v2/everything?q=bitcoin&apiKey=5bfa8ce7506d43e8b901108e9ccd179c"

  news():Observable<any>{
    return this.http.get(this.newsapiURL);
  }
}
