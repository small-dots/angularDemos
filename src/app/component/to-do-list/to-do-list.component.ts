// @ts-ignore
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
/**
 * toDoList组件
 */
export class ToDoListComponent implements OnInit {
  public keyWord: any;
  public toDoList: any[] = [];
  public DoList: any[] = [];
  public checkBean: any[] = [];

  constructor() {
  }
  ngOnInit(): void {
  }

  addItem(event: any) {
    const param = {value: 0, label: this.keyWord};
    if (event.keyCode === 13) {
      if (this.toDoList.length > 0) {
        for (const item of this.toDoList) {
          this.toDoList.push(param);
          const obj = {};
          // tslint:disable-next-line:no-shadowed-variable
          this.toDoList = this.toDoList.reduce((item, next) => {
            // tslint:disable-next-line:no-unused-expression
            obj[next.label] ? '' : obj[next.label] = true && item.push(next);
            return item;
          }, []);
        }
        this.keyWord = '';
      } else {
        this.toDoList.push(param);
        this.keyWord = '';
      }
    }
  }

  delete(index) {
    this.toDoList.splice(index, 1);
  }

  changeStatus($event: Event, ri: any) {
    if (this.checkBean) {
      this.toDoList[ri].value = 1;
    }
  }
}
