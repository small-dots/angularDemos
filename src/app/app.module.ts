/**
 * 这个组件是angular根模块，告诉angular如何组装应用
 */
import {BrowserModule} from '@angular/platform-browser'; // 浏览器解析模块
import {NgModule} from '@angular/core'; // angualr 核心模块
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NewsComponent} from './component/news/news.component';
import {TopComponent} from './component/top/top.component';
import {SearchComponent} from './component/search/search.component';
import {ToDoListComponent} from './component/to-do-list/to-do-list.component';
import {StrongeService} from './services/stronge.service';
import { TodoListEnduranceComponent } from './component/todo-list-endurance/todo-list-endurance.component';
import { SlideComponent } from './component/slide/slide.component';
// @NgModule装饰器，@NgModule接受一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  // 项目当前运行的组件
  declarations: [
    AppComponent,
    NewsComponent,
    TopComponent,
    SearchComponent,
    ToDoListComponent,
    TodoListEnduranceComponent,
    SlideComponent
  ],
  // 项目运行时依赖的组件
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 项目配置需要的服务
  providers: [StrongeService],
  // 指定应用的主视图（称为根组件），通过引导根AppModule来启动应用，这里一般写的是根组件
  bootstrap: [AppComponent]
})
// 暴露该模块，但是如果是根模块，可以不用这样写，因为根模块不需要暴露
export class AppModule {
}
