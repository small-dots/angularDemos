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
  }

  hideSlide() {
    const slideDom = this.slide.nativeElement;
    slideDom.style.transform = 'translate(100%,0)';
  }
}
