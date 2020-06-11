import {Injectable} from '@angular/core';
import {Observable, pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// 异步编程
export class AsynchronousProgrammingService {

  constructor() {
  }

  /**
   * 如果直接在外面调用此方法是无法获取到userName的，因为访问改方法时，执行顺序为：
   */
  // 第一步
  getDate() {
    // 第二步
    setTimeout(() => {
      // 第四步
      const userName = '张三';
    }, 1500);
    // 第三步 ，执行到此处时，后面没有程序可以执行，直接跳出，所以外界获取时会报undefined
  }

  /**
   * 通过回调解决
   */
  getDataByCallBack(res) {
    setTimeout(() => {
      const userName = '张三--通过回调获取';
      res(userName);
    }, 1500);
  }

  /**
   * 通过异步解决
   */
  getDataByAsyn() {
    return new Promise(resolve => {
      setTimeout(() => {
        const userName = '张三--通过异步获取--promise';
        resolve(userName);
      }, 1500);
    });
  }

  /**
   *  通过rxjs异步获取
   */
  getDateByRxjs() {
    return new Observable(res => {
      setTimeout(() => {
        const userName = '张三--通过异步获取--Rxjs';
        res.next(userName);
      }, 1500);
    });
  }

  /**
   *  通过rxjs异步获取
   */
  getDateByPromiseAdd() {
    let num = 0;
    return new Promise(resolve => {
      setInterval(() => {
        num++;
        const count = '次数' + num;
        resolve(count);
      }, 1000);
    });
  }

  /**
   * 应用rxjs中的管道对数据进行处理
   */
  getDateByRxjsHandle() {
    let num = 0;
    return new Observable(res => {
      setInterval(() => {
        num++;
        const userName = '张三--通过异步获取--Rxjs--累加器' + num;
        res.next(userName);
      }, 1000);
      // 过10秒后取消订阅
      setTimeout(() => {
        res.unsubscribe();
      }, 10000);
    });
  }

  /**
   * 用rxjs管道处理处理
   */
  getDataByRxjsPipe() {
    let count = 0;
    return new Observable<number>(res => {
      setInterval(() => {
        count++;
        res.next(count);
      }, 1000);
    });
  }

  setUserInfo(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getUserInfo(key) {
    return new Observable<any>(res => {
      const arrTemplate = JSON.parse(localStorage.getItem(key));
      res.next(arrTemplate);
    });
  }
}
