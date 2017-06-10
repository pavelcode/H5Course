# 复习
- MVVM
```
//vm -> VM -> 
 var vm =  new  Vue({  

    el:'',
    data:{
         // 相当于Model -> M
         msg:''
        },
    methods:{
        this -> vm
        this.msg
    }
    })

MVVM的作用是什么呢？
 传统的操作dom的做法是将逻辑与视图操作完全糅合在一起了，为了系统的可扩展性
 必须要想方设法的将他们二者放开，那么这个时候就出现了MVVM设计模式

在Vue中是如何去应用MVVM的呢？
  我们的Vue的对象实例负责管理逻辑操作和视图，当逻辑获取到数据以后只需要操作
  data中定义的属性，即可通过系统的v-相关指令来控制到视图的变化
```

- 利用案例将Vue的编写步骤固定好
```
    1、导入vue.js
    2、定义vue监控的dom元素的区域，将来在这个区域中的所有的和vue相关的指令
    都能够备处理
    3、实例化Vue对象
        el:    ->  存放的是需要vue对象进行监控的区域，通常是id或者class
        data:  ->  这个里面定义的所有属性相当于MVVM中Model,这个Model被VM来管理，并且能够将这些数据通过v-这些指令解析到Viwe上
        methods:-> 主要是给 v-on 这个指令来进行事件注册的

```

- 系统指令


# Vue基础第2天 
## Vue中的指令
- Vue的系统指令通常都是v-开头的这些指令
- 自定义指令

## 自定义指令
- 自定义指令写法
```
  1、自定义属性指令Vue.directive(指令id（注意不能以v-开头，将来在使用的时候自动加上）,function(){this.el})
      属性指令举例：
      <input type="text" v-focus> 中的 v-focus 这个指令我们称之为自定义属性指令

    定义格式：
    Vue.directive('focus',{
        bind:function(){
          //这个指令的逻辑
          //可以利用this.el来获取到当前指令所在的元素对象
          this.el.style.color = 'red';
        }
        });


  2、自定义元素指令Vue.elementDirective(指令id,{bind:function(){}})
      this.el
      this.vm



```

- 利用自定义指令实现品牌管理的搜索框自动获取焦点
```
<input type="text" v-focus>

完整写法：
Vue.directive('focus',{
        bind:function(){
          //这个指令的逻辑
          //可以利用this.el来获取到当前指令所在的元素对象
         this.el.focus();
        }
        });

简单写法：
Vue.directive('focus',function(){
    this.el.focus();
    });


//定义一个带有参数的自定义指令
    Vue.directive('color',{
        params:['colorname'],
        bind:function(){
            //1.0 获取到colorname的值
            var cname = this.params.colorname;

            //2.0 获取到el以后给其赋予一个样式
            this.el.style.color = cname;
        }
    });

    使用：
    <input type="text" v-model="productid"  v-color colorname="blue" >


特点：
1、指令的定义一定要放到 new Vue({}) 代码之前，否则报错并且无效
2、在利用Vue.directive()注册指令的时候，不需要加上v- 这个前缀
3、在dom元素上使用的时候，必须加上v- 前缀
4、如果想要给自定义属性指令传入参数，则注意：
    1、在注册的时候要利用 params:[] 来接收参数
    2、通过bind:function(){}中 利用 this.params点出和parms:[]中定义的那个字符串同名的属性
    3、在dom元素上使用的时候
     通过  v-color空格更上 parmas:[]中定义好的同名的参数名称

```


## 过滤器
- 系统过滤器

- 自定义过滤器
```
    1、私有过滤器

        代码可以参考：04-源代码\知识点\03自定义私有过滤器实现日期格式化功能.html

    2、全局过滤器
     代码可以参考：04-源代码\知识点\04自定义全局过滤器实现日期格式化功能.html

```

- 利用自定义过滤器实现品牌案例中时间的格式化

## v-on注册事件的按键修饰符 
- 利用enter修饰符实现品牌管理中的添加区域实现回车即新增
- v-on绑定事件时的按键修饰符
```
    通过 Vue.directive('on').keyCodes 就可以获取到所有的按键修饰符的单词就可以使用了

down:40
enter:13
esc:27
left:37
right:39
space:32
tab:9
up:38

//2.0 可以利用Vue.directive('on').keyCodes 动态添加一个属性来实现自定义的按键修饰符的扩展

```

## vue-resource实现ajax请求
- $http上方法的演示

- Vue生命周期相关方法

- 实现品牌管理按钮的ajax版

## 组件开发 
- 全局组件

- 局部组件

- props父组件向子组件传值

- $emit() 和 $on() 实现子组件向父组件传值