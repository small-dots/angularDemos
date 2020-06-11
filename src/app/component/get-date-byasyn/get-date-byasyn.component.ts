import {Component, OnInit} from '@angular/core';
import {AsynchronousProgrammingService} from '../../services/asynchronous-programming.service';
import {filter, map, take, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-get-date-byasyn',
  templateUrl: './get-date-byasyn.component.html',
  styleUrls: ['./get-date-byasyn.component.css']
})
export class GetDateByasynComponent implements OnInit {

  constructor(private asynchronousProgramming: AsynchronousProgrammingService) {
  }

  public username: string; // 用户名
  public userList: any[] = []; // 用户列表
  public queryList: any[] = []; // 用户列表
  public userid: string; // 用户id

  ngOnInit(): void {
    // 1、同步 直接获取数据，无法获取，显示undefined
    const data1 = this.asynchronousProgramming.getDate();
    console.log(data1);


    // 2、通过回调函数获取
    this.asynchronousProgramming.getDataByCallBack(res => {
      console.log(res);
    });

    // 3、通过异步方法--promise获取
    this.asynchronousProgramming.getDataByAsyn().then(res => {
      console.log(res);
    });

    // 4、通过异步方法-rxjs获取
    const data3 = this.asynchronousProgramming.getDateByRxjs();
    data3.subscribe((res) => { // 订阅
      console.log(res);
    });

    // 5、通过异步方法-rxjs获取--累加
    const data4 = this.asynchronousProgramming.getDateByRxjsHandle();
    data4.subscribe(res => {
      console.log(res);
    });

    // 6、通过rxjs管道修饰结果
    const data5 = this.asynchronousProgramming.getDataByRxjsPipe();
    data5.pipe(
      // 返回偶数 2,4,6,8,10.......
      filter(data => {
        if (data % 2 === 0) {
          return true;
        }
      }),
      // 返回结果乘以他自己 4,16,36,64.....
      map(value => value * value),
      // 只返回三个结果 4,16,36
      take(3),
      // 将结果封装为数组 [4,16,36]
      toArray()
    )
      .subscribe(res => {
        console.log(res);
      });

    // 通过Promise来实现累加
    this.asynchronousProgramming.getDateByPromiseAdd().then(res => {
      console.log(res);
    });
  }

  /**
   * 添加用户
   */
  add() {
    if (this.username) {
      this.userid = Math.random().toString(36).substr(-10); // 随机十位字符串
      const userMap: object = {
        userId: this.userid,
        name: this.username
      };
      this.userList.push(userMap);
      this.asynchronousProgramming.setUserInfo('userList', this.userList);
      this.username = '';
    }
  }

  // 根据用户名获取用户信息
  searchByName() {
    this.queryList = [];
    let arr = [];
    const name = this.username;
    const a = this.asynchronousProgramming.getUserInfo('userList');
    a.subscribe(res => { // 订阅数据
      arr = res;
    });
    for (const item of arr) {
      if (item['name'] === name) {
        this.queryList.push({userId: '***', name: item.name});
      }
    }
    if (this.queryList.length === 0) {
      alert('用户不存在');
    }
  }
}
