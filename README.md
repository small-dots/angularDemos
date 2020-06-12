# Angular demos
### 平时练习或者在学习Angular时，编写的一些小demo，收集在此

### 1、ToDoList

> 实现了最基本的TODOList的功能，输入事项回车可以出现在代办项，在代办项中勾选就出现在已完成中，并在代办中消失

<img src="https://pic4.zhimg.com/80/v2-8d87ec61dcbab38487264c35c5c74fc9_720w.png" alt="ToDoList"  />

### 2、实现搜索历史

> 实现在输入关键字搜索时，将关键是缓存下来，并展示在界面，用户也可以删除；
>规定只能缓存20个关键字

<img src="https://pic3.zhimg.com/80/v2-e0d499c0d88967b96af684e3fffe9df1_720w.png" alt="实现搜索历史"  />

### 3、TODOList实现持久化

> 在实现了最基本的TODOList的功能的基础之上，实现数据的缓存，在每次页面刷新时，之前操作的数据不丢失

#### 基本原理
公共服务中设置缓存 (StrongeService)
~~~javascript
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
~~~

在输入框按回车时：
~~~javascript
this.strongeService.set('todoList', this.toDoList);
~~~

刷新时：
~~~javascript
  ngOnInit(): void {
    const arrTemplate = this.strongeService.get('todoList');
    if (arrTemplate) {
      this.toDoList = arrTemplate;
    }
  }
~~~

<img src="https://pic4.zhimg.com/80/v2-052465185dc1fc0ba6ae5fd19f9ba62c_720w.png" alt="ToDoList---持久化"  />

### 4、css结合Angular实现简单的侧边栏动画
 > 主要是借助angualr中ViewChild修饰器，获取子组件的DOM并修改DOM的transform样式

<img src="https://pic1.zhimg.com/80/v2-28c367af14014a368fa1ddaa41ca52d2_720w.gif" alt="侧边栏动画"  />

### 5、Rxjs异步编程数据流
>此处就分别使用了四种方法来获取异步数据

1、同步

2、回调

3、异步（Promise）

4、异步（Rxjs）

具体的内容不再此处赘述，可以参考我的知乎文章：
[爱跳的虫子：Rxjs异步编程数据流](https://zhuanlan.zhihu.com/p/147567629)

### 6、Angular 中的数据交互

1、get

2、post

3、jsonp

<img src="https://pic3.zhimg.com/80/v2-f47afa23abe21502d6ae02f5d6bdde79_720w.png" alt="Angular 中的数据交互 案例
