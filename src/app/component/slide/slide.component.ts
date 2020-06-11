import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @ViewChild('slide') slide: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  showSlide() {
    const slideDom = this.slide.nativeElement;
    slideDom.style.transform = 'translate(0,0)';
    // 以下代码可以实现摆钟效果
    // setInterval(() => {
    //   console.log(12)
    //   slideDom.style.transform = 'translate(0,0)';
    //   setTimeout(() => {
    //     console.log(13)
    //     slideDom.style.transform = 'translate(100%,0)';
    //
    //   }, 250);
    // }, 500);

  }

  hideSlide() {
    const slideDom = this.slide.nativeElement;
    slideDom.style.transform = 'translate(100%,0)';
  }
}
