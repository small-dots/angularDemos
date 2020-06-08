import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public title = 'new conponent';

  constructor() {
  } // 构造函数

  ngOnInit(): void {
  }

}
