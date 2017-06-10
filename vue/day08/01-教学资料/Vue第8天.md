#回顾昨天功能 
```
  掌握重点：
  1、mint-ui中的延迟加载组件的时候
  2、vue-preview实现图片预览功能

其他的业务功能掌握：
1、一个新的组件的开发流程,main.js , 在其他组件中要跳转到这个组件的位置配置一下路由规则对应的url

2、综合使用了vue的一些相关知识点
  1、获取路由规则中的参数 
  2、ajax的请求
  3、父组件给子组件传值，反过来
  4、组件的重用 silder.vue 和 inputNumber.vue
  5、组件的两种使用方式
    1、通过路由来进行组件的导航
    2、在一个父组件中如何去使用另外一个组件

```

## 今天的内容 
- 实现 商品详情页面中 商品购买区域中的加入购物车的功能
 + 点击加入购物车的时候出现一个小球的动画
 + 实现点击购物车的时候，要将商品数据保存到本地的浏览器中(localStorage)

-  实现购物车页面
  + 使用计算属性来进行购物车的个数和价格的计算


## 钩子函数mounted 的使用
```
  mounted：这个函数执行完毕以后，表示将template中的所有指令解析完毕了，这个时候除了产生 data和methods中的相关属性和方法之外，还创建了和模板中的指令的相关参数，比如 $refs 此时就会被赋值

```

## 使用动画的进入三个钩子函数实现  加入购物车的小球飞入动画
```
  进入动画的函数: 实现路径的移动控制
  1、beforeEnter()
  2、enter()
  3、afterEnter()


  在Vue2.0 中如何使用动画元素 transition
  <transition
    @before-enter=""
    @enter=""
    @after-enter=""
  >
  //这里放要实现动画的小球
    <div class="ball"></div>
  
  </transition>

  在小球元素的ball 样式中要写上: transition:all 0.4 ease;

```

## 将项目打包发布 
```
1、利用 webpack -p 实现整个项目打包到 dist文件
2、在项目的package.json中的scripts中配置：
"dist":"webpack -p"



```