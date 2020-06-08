import {Component} from '@angular/core';

// @Component装饰器，包含一个对象
// @ts-ignore
@Component({
  selector: 'app-root', // 组件的使用名称
  templateUrl: './app.component.html', // 组件的静态页面
  styleUrls: ['./app.component.css'] // 组件所需的样式
})
// 暴露该组件
export class AppComponent {
  title = 'angularDemo1';
}
