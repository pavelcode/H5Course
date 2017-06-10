#webpack笔记
## webpack特点
    - webpack本质上是nodejs的一个包，所以webpack是基于node.exe来运行的
    - 想要运行webpack就必须要安装node.exe

## 如何安装webpack 
- 安装node.exe的同事会自动安装好npm 包管理工具
- npm 包这个管理器下载的包是来源于国外，所以速度回很慢，甚至出错
所以我们使用国内taobao开发的一个cnpm来替代npm的使用

## 使用webpack之前的准备工作
- 安装node环境
- npm i cnpm -g 将cnpm全局安装
- cnpm i webpack -g 将webpack安装成为全局包


## 学习nodejs的模块化开发
```
    1、在nodejs中一切.js文件都可以是一个模块
    2、calc.js
        function add(x,y){return x + y;}
        module.exports = add;

    3、main.js使用calc.js中的add方法
        导calc.js模块
        var calcExports = require('./calc.js');
    
```

## webpack的指令
- 在当前要打包的入口.js文件的位置打开cmd ，输入 webpack 入口文件.js  输出文件.js

- 