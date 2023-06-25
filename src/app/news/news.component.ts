import { NewsapiService } from '../Service/newsapi.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  implements OnInit {
  newsList :any[]=[];
  currentCategory = "general";
  currentCountry = "ru";
  categoryList = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];
  countryList = ["ru", "ua", "gb", "us","in"];
  currentSource = "";
  sourceList :any[]= [];

  constructor(private newsApiService: NewsapiService) {}

  ngOnInit() {
    // Get news
    this.fetchNewsByCountryAndCategory();

    // Get all sources
    this.fetchSourcesByCountry();
  }

  onChange() {
    // Get news
    this.fetchNewsByCountryAndCategory();

    // Get all sources
    this.fetchSourcesByCountry();
  }

  onChangeSource() {
    this.newsApiService.getNewsBySource(this.currentSource).subscribe((news:any) => {
      this.newsList = news['articles'];
    });
  }

  private fetchNewsByCountryAndCategory() {
    this.newsApiService.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe((news:any) => {
      this.newsList = news['articles'];
    });
  }

  private fetchSourcesByCountry() {
    this.newsApiService.getSourceByCountry(this.currentCountry, this.currentCategory).subscribe((sources:any) => {
      if (sources['sources'].length) {
        this.sourceList = sources['sources'];
        this.currentSource = this.sourceList[0]?.id;
      }
    });
  }
}




