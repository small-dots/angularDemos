import {Component, OnInit} from '@angular/core';
import {StrongeService} from '../../services/stronge.service';

@Component({
  selector: 'app-todo-list-endurance',
  templateUrl: './todo-list-endurance.component.html',
  styleUrls: ['./todo-list-endurance.component.css']
})
export class TodoListEnduranceComponent implements OnInit {
  public keyWord: any;
  public toDoList: any[] = [];
  public checkBean: any[] = [];

  constructor(
    private strongeService: StrongeService
  ) {
  }

  ngOnInit(): void {
    const arrTemplate = this.strongeService.get('todoList');
    if (arrTemplate) {
      this.toDoList = arrTemplate;
    }
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
          this.strongeService.set('todoList', this.toDoList);
        }
        this.keyWord = '';
      } else {
        this.toDoList.push(param);
        this.strongeService.set('todoList', this.toDoList);
        this.keyWord = '';
      }
    }
  }

  delete(index) {
    this.toDoList.splice(index, 1);
    this.strongeService.set('todoList', this.toDoList);
  }

  changeStatus($event: Event, ri: any) {
    if (this.checkBean) {
      this.toDoList[ri].value = 1;
      this.strongeService.set('todoList', this.toDoList);
    }
  }
}
