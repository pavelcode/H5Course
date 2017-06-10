# webpack的使用

## webpack-dev-server 这个包
```
    webpack-dev-server是用来干嘛的？
    前端程序员在开发过程中，想要做到改变一个文件的时候，实现自动利用webpack中的相关loader进行打包和自动刷新浏览器的功能

    步骤：
    1、由于webpack-dev-server 是依赖于 webpack的，所以要
        npm install webpack-dev-server webpack --save-dev

        注意点：我们现在使用的是webpack1
        在当前的学习目录结构中，由于在webpack.config.js中使用
        babel:{
         presets: ['es2015'],  
         plugins: ['transform-runtime']  //这句代码就是为了解决打包.vue文件不报错
    }

    那么我们得使用webpack1
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
   
    但是要在package.json中的scripts中进行webpack-dev-server指令的配置

    webpack-dev-server 的使用指令
    参数:
    1、 --inline : 作用是能够保证当代码有改变的时候保证重新刷新浏览器
    2、 --hot ：可以热刷新
    3、 --open：执行完webpack-dev-server开启服务器以后，自动打开浏览器
    4、 --port 4009  指定webpack-dev-server的监听端口
    

    利用webpack-dev-server去实现网站的托管功能的指令写法：
    webpack-dev-server --inline --hot --open --port 4009

    为了简化这种写法,我们就可以将其放到 package.json中的scripts
    "scripts": {   
    "dev":"webpack-dev-server --inline --hot --open --port 4009"
    }

    利用webpack-dev-server去实现网站的托管功能的指令写法可以简化成：
    npm run dev


    3、安装一个插件
      npm i html-webpack-plugin --save-dev
      在webpack.config.js中配置好这个html-webpack-plugin插件

    总结：
    1、npm webpack@1.14.0 webpack-dev-server@1.16.2 html-webpack-plugin --save-dev
    2、在package.json中的script中配置
         "scripts": {   
        "dev":"webpack-dev-server --inline --hot --open --port 4009"
        }
    3、在webpack.config.js中配置
        // 导入html-webpack-plugin包
        var HtmlWP =  require('html-webpack-plugin');

        plugins:[
        new HtmlWP({
          title: 'index',  //生成的页面标题
          filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
          template: 'index1.html' //根据index1.html这个模板来生成(这个文件请你自己生成)
        })
    ]

```

## webpack打包 .vue这种文件
```
    .vue文件其实就是我们vue中的组件页面
    .vue组件页面的写法结构：
    1、<template><div class="tmpl"></div>由于是vue2.0 所以这个里面一定要放一个根元素，可以放vue的指令 v-</template>

    2、<script> export default{data:{}} -> new Vue({data:{}}) 就是导出一个 Vue的实例  </script>

    3、<style></style>  中的样式是全局的
        <style scoped></style> 中的样式是当前组件的

    如何将.vue中的内容解析编译并且展示在浏览器中？
    解决方案步骤：
    1、安装 vue-loader ，并且要安装 vue 包
        npm install vue-loader --save-dev
        npm install vue  --save

    2、在main.js中编写解析.vue的代码
        // 解析.vue组件页面的代码

        // 1.0 导入vue这个包
        import Vue from 'vue';

        // 2.0 导入 App.vue文件
        import App from './App.vue';

        // 3.0 将App中的内容编译解析出来替换index.html中的<div id="app"></div>
        new Vue({
            el:'#app',
            // render:function(create){create(App);}  es5语法
            render:create=>create(App) //es6语法
        });

    3、在webpack.config.js中配置 .vue的对应的vue-loader

    注意点：想要编译成功.vue文件必须安装vue-template-compiler

     4、npm i vue-template-compiler --save-dev
    
```


## 总结vue中常用的es6语法
```
    1、对象的写法
        es5中对象： {add:add,substrict:substrict}
        es6中对象： {add,substrict}

    2、在对象中的方法的写法
        es5中对象： {add:function(){},substrict:function(){}}
        es6中对象： {add(){},substrict(){}}
    
    3、对象的导出写法
     calc.js

     es5两种形式：
     1、module.exports = fucntion (){};
     2、exprots.add =  fucntion (){};

    es6中写法：
    1、export default{
        add(){}
    }
    2、export fucntion add(){} 相当于 将add方法当做一个属性挂在到exports对象


    4、对象的导入
    es5: var add  = require('./calc.js');
    es6:
    如果导出的是：export default{ add(){}}
    那么可以通过  import obj from './calc.js'

    如果导出的是：
    export fucntion add(){} 
    export fucntion substrict(){} 
    export const PI=3.14

    那么可以通过按需加载 import {add,substrict,PI} from './calc.js'

    5、es6中的箭头函数的写法
    箭头的演变过程：
    //需求：利用函数实现倒序排列
    [2,1,3].sort(function(x,y){return y - x;});

    //用箭头函数实现 =>读 goes to
    [2,1,3].sort((x,y)=>{return y - x;});
    [2,1,3].sort((x,y)=> {x++;y++; y - x;});
    [2,1,3].forEach(x=> {console.log(x)});

```

## 在webpack中使用vue-router
```
    步骤：
    1、安装vue-router  npm i vue-router --save
    2、按照vue-router的路由写法步骤编写路由规则代码（mian.js）
        编写的代码文件是webpack打包的入口文件

```


##上午内容的总结
```
    1、webpack-dev-server
        注意点：一定配合 webpack-html-plugin 这个模块来自动在内存中生成一个index.html页面，同时将bulid.js注入到
        这个页面的最下方，才能实现自动刷新功能

        webpack-dev-server 指令放到了 pacage.json中的scripts中

        参数：
        --inline : 为了实现能够自动刷新功能
        --hot   ： 热加载
        --open ：自动将index.html页面在浏览器中打开
        --port 端口号  ，表示服务器监听的端口


    2、利用vue-loader去解析 .vue组件页面
        注意点： vue-loader一定要配合 vue-template-complier 先解析编译.vue文件

        要能够将App.vue组件解析并且显示在浏览器中，要在webpack的入口文件main.js中写入：
        import Vue from 'vue';
        import App from './App.vue';
        new Vue({
            el:'#app',
            render:c=>c(App)
            })

        在我们的index1.html这个模板中，增加一个
        <div id="app"></div>


    3、总结了es6语法

    4、在webpack项目结构中集成了vue-router模块
        在webpack的入口文件main.js中写入：
      1、  import vueRoter from 'vue-router';
       2、 Vue.use(vueRoter);
       3、 var vurRouterObj = new vueRoter({
            routes:[设置路由规则]
            });

      4、   new Vue({
            el:'#app',
            router:vurRouterObj, //使得路由对象生效
            render:c=>c(App)
            })

    5、在App.vue中
        <router-link to='/login'>login</router-link>

        <router-view></router-view>

```

## 项目中用到的第三方组件
- mint-ui  （vue的组件库）
```
    官网：http://mint-ui.github.io/#!/zh-cn

    使用步骤：
    1、安装mint-ui
        npm install mint-ui --save

    2、在main.js中导入mint-ui的样式表 mint-ui\lib\style.css  

    3、import mintUI  from 'mint-ui'
       Vue.use(mintUI);

    4、在你的相关.vue组件页面上就可以使用了
        如果：使用的是一个样式，则直接使用mint-ui提供的标签即可
        例如：<mt-button type="danger" size="larger"></mt-button>

        如果：使用的是在js中要执行的对象，就必须通过 import 导入
        例如：MessageBox ,其中名字一定是要按照文档说明的来命名，修改了以后不能执行

        import {MessageBox} from 'mint-ui'
        MessageBox('标题','内容')


    和mint-ui相同功能的一个组件vux
    官网：https://vuxjs.gitbooks.io/vux/content/about/before.html

    vue1.0升级到vue2.0升级文档：https://vux.li/?x-page=github_readme#/zh-CN/upgrade-to-2

    在线演示：https://vux.li/demos/v2/?x-page=v2-doc-home#/

```

- mui (并不属于vue的组件，而是一个移动端的css的功能库)
```
    注意：mui不是一个vue的组件，但是也可以在vue中使用

    步骤：
    1、在mian.js中导入mui这个框架的 mui.css和icons-extra.css
    2、按照mui的demo中的每种组件，去按需使用

```

## vue官方提供的 脚手架工具vue-cli补充
```
   安装网址： https://cn.vuejs.org/v2/guide/installation.html

    安装步骤：

    # 全局安装 vue-cli
    $ npm install --global vue-cli
    # 创建一个基于 webpack 模板的新项目
    $ vue init webpack my-project
    # 安装依赖，走你
    $ cd my-project
    $ npm install
    $ npm run dev
```

## 公司的开发流程
```
    软件公司（IT企业，互联网）组织架构
    0、需求部（产品部）
        - 提供这个系统要开发成什么样子
        - 提供一个需求文档(.doc)的
        - 出系统的交互稿
        - UI部门根据交互稿的原型设计出UI设计稿（.psd文件）

    1、开发部 - 总监
        - 前端部门 - 部门经理 -项目经理+ 技术经理
            + web前端部门（Html5部门）
            + iOS部门 
            + Android部门
            + 前端部门的开发者去调用后台部门开发api
            + 前端开发人员在读不懂后台开发人员提供的api的情况下，可以及时沟通

        - 后台部门
            + java,php,.Net,NodeJS这个开发
            + 后台部门开api给前端部门的开发者去调用

 
    3、测试部门

    4、运维部门
        
    5、运营部门
        

    开发流程：
    1、出需求-> 出交互设计稿->UI设计稿（.psd）
                            ->前端部门做系统的前端框架设计
                            ->后台部门做系统的数据库设计+后台相关系统的设计+api的设计

    当所有部门的工作完成以后，开启联调（联合调试）

    
```

## 将框架源码利用git托管
```
    1、gighub.com  
    2、git.oschina.net 码云 (国内的快)
 
```

## 实现项目的第一个页面 首页
- 轮播图
- 导航区
- 头和尾


## webpack中使用 vue-resource
```
    步骤：
    1、安装vue-resource
       npm i vue-resource --save

    2、将vue-resource绑定到vue上

```


## git命令的总结
```
    git clone ：将git网站上的具体的一个仓库中的代码下载下来
    git status -s: 查看本地的文件管理状态  -s:看它的简要信息
    git add . :将本地的所有文件加入到.git 中
    git commit -m '注释' 提交文件到本地 .git
    git remote add 远程仓库的别名 仓库的路径(htts)
    git remote :查看本地的所有别名列表
    git push 远程仓库的别名 master :将文件提交给远程仓库

```