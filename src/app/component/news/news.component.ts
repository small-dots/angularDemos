import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit {
  public title = 'new conponent';
  @ViewChild('mybox') mybox: any;
  @ViewChild('myname') myname: any;

  constructor() {
  } // 构造函数

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.mybox);
    const dom = this.mybox.nativeElement;
    dom.style.color = 'blue';
    dom.style.width = '200px';
    console.log(dom.innerHTML);
    console.log(this.myname.showMyName());
  }

}
