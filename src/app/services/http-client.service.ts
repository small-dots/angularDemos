import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  public api = 'assets/commConfig/userInfo.json';

  constructor(public http: HttpClient) {
  }

  /**
   * 获取指定api数据,如果api涉及到跨域，还需要处理跨域的问题
   */
  getUser() {
    return this.http.get(this.api);
  }
}
