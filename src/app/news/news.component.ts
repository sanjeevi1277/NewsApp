import { Component } from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news:any;
constructor(private newservice:NewsapiService){}
ngOnInit(){
this.newservice.news().subscribe((res)=>{
  console.log(res)
this.news=res;
})
}
}
