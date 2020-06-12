import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../../services/http-client.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-get-data-by-http',
  templateUrl: './get-data-by-http.component.html',
  styleUrls: ['./get-data-by-http.component.css']
})
/**
 * 此处演绎如果获取和传递数据
 */
export class GetDataByHttpComponent implements OnInit {
  public userList: any[] = [];
  public username: any;
  public age: number;

  constructor(public http: HttpClientService,
              public httpService: HttpClient) {
  }

  ngOnInit(): void {
  }

  /**
   * 1、通过angular自带的http服务来获取数据
   */
  showUser() {
    this.http.getUser().subscribe((res: []) => {
      this.userList = res || [];
    });
  }

  /**
   * 给指定的api传递参数
   */
  postSomeDate() {
    // if (!this.username && !this.age) {
    //   alert('请输入姓名和年龄');
    //   return;
    // }
    // 手动设置请求的类型
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    // 存在跨域
    const api = 'http://127.0.0.1:3000/add';

    this.httpService.post(api, {name: this.username, age: this.age}, httpOptions).subscribe((response: any) => {
      this.userList.push(response.userMap);
      console.log(response);
    });
  }

  getDataByJsonp() {
    const api = 'https://api.apiopen.top/getJoke?page=1&count=2&type=video'; // 摘自接口大全的接口
    this.httpService.jsonp(api, 'callback').subscribe(res => {
      console.log(res);
    });
  }
}
