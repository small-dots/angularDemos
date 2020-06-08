import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
/**
 * 实现一个简单的搜索，有缓存功能
 */
export class SearchComponent implements OnInit {

  constructor() {
  }

  public historyList: any = [];
  public keyWord: any;

  ngOnInit(): void {
  }

  /**
   * 实现搜索功能
   */
  Dosearch() {
    if (this.keyWord !== '' && this.keyWord !== undefined && Array.isArray(this.historyList) &&
      this.historyList.indexOf(this.keyWord) === -1) {
      this.historyList.push(this.keyWord);
      this.keyWord = '';
      if (this.historyList.length >= 20) {
        this.historyList.shift();
      }
    }
  }

  /**
   * 删除
   */
  delete(index) {
    // delete this.historyList[index];
    this.historyList.splice(index, 1);
  }
}
