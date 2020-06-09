import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * 实现数据缓存
 */
export class StrongeService {

  constructor() {
  }

  /**
   * 设置 缓存
   * @param key 缓存目标
   * @param value 缓存值
   */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 获取 缓存数据
   * @param key 缓存目标
   */
  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * 清除缓存
   * @param key 缓存数据
   */
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
