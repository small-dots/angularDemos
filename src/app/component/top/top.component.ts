import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void { // 组件和指令初始化完成 ，并不是DOM节点加载完成
    // 原生js
    const dom = document.getElementById('box');
    dom.style.textAlign = 'center';
    dom.style.color = 'red';
  }

  /**
   * 视图加载完成以后会执行的方法，DOM节点加载完成
   */
  ngAfterViewInit() {
    // ...此处可以获取dom
  }

  showMyName() {
    return '你的名字';
  }
}
