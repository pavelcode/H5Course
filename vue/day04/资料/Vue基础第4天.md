#webpack笔记
## webpack特点
    - webpack本质上是nodejs的一个包，所以webpack是基于node.exe来运行的
    - 想要运行webpack就必须要安装node.exe
    - webpakc是在开发阶段要被程序员使用的，但是在生成环节中是用不到的

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

## webpack的使用方式 
- 第一种使用方式：webpack 入口文件.js的路径  输出文件.js的路径

```
    在当前要打包的入口.js文件的位置打开cmd ，输入 webpack 入口文件.js  输出文件.js 

    使用案例：下午02 - webpack的基本指令使用 .itcast

```

- 第二种使用方式：webpack 结合 webpack.config.js 配置文件进行打包

```
    目的：在cmd面板中直接利用  webpack指令即可进行打包，
    特点：如果直接指向 webpack 指令，webpack指令会自动去查找当前目录下的webpack.config.js文件
    
    编写步骤：

    1、webpack.config.js中定义入口文件和输出文件的 内容

    module.exports={
    // 1.0 定义打包的入口文件路径
    entry:'./src/main.js',
    output:{
        path:'./src',   //打包以后的文件存放目录
        filename:'build.js'  // 打包以后生成的文件名称
    } 

    2、在与webpack.config.js文件相同的目录下打开cmd，执行webpack即可完成打包

```

- 利用webpack完成 css文件的打包
```
    注意点：webpack是利用style-loader和css-loader这两个nodejs的包来完成.css文件的打包工作

    步骤：
        1、cnpm i style-loader css-loader 安装本地包
            style-loader与css-loader会依赖于其他的很多包，所以一般我们在将这个项目文件发送给其他人使用的时候，是要删除 node_modeuls这个文件夹的，这时候就有可能不知道这个项目中依赖于哪些第三方包

            解决方案：
            node.exe中提供了一个 package.json文件用来存放当前安装的所有包，
            这些包分为：
            1、开发阶段使用的包      cnpm i 包名称 --save-dev
             --save-dev对应的是package.json devDependencies节点
            2、生产环境阶段使用的包  cnpm i 包名称 --save
                --save对应的是package.json dependencies节点

            保存的步骤：
            1、利用 cnpm init 来生成一个 package.json文件
            2、cnpm i style-loader css-loader  --save-dev

        2、将style-loader与css-loader配置在 webpack.config.js中，webpack才能使用这两个loader文件

```

- 利用webpack完成 sass 文件的打包

```
    步骤：
    1、cnpm install sass-loader node-sass --save-dev
    2、sass-loader 在webpack.config.js中增加一个 loader节点

    注意点： sass文件的打包依赖于 sass-loader 解析成原生的 .css语法
    所以要最终打包成功就必须要依赖于style-loader css-loader 
    所以在配置 sass的时候，
    style-loader!css-loade!sass-loader

    {
                test:/\.scss$/,   //表示当前要打包的文件的后缀正则表达式
                loader:'style-loader!css-loader!sass-loader' //实现sass文件的打包
    }

```

- 利用webpack完成 less 文件的打包

```
    步骤：
    1、cnpm install less-loader less  --save-dev

    2、less-loader 在webpack.config.js中增加一个 loader节点
        注意点： 在配置 loader:'' 对应的loader的时候，要
       按照 style-loader!css-loade!less-loader 配置
    
```

- 利用webpack完成 url()导入资源文件的打包

```
例如需求：
    background-image: url(../imgs/home.png)
    那么webpack必须利用 url-loader 这个包去解析，而url-loader依赖file-loader，所以
    步骤：
    1、npm i url-loader file-loader --save-dev

    2、url-loader在webpack.config.js中增加一个 loader节点

```

- 利用webpack完成 es6转es5

```
    步骤：
    1、npm install babel-core babel-loader babel-preset-es2015 babel-plugin-transform-runtime --save-dev

     注意：babel-plugin-transform-runtime 安装是为了在后面能够正常编译.vue这个文件不出错


    2、webpack.config.js配置

```
