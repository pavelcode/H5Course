## 图片分享模块
- 图片列表（mint-ui中的延迟加载）
- 图片的详情
    + 9宫格实现这个图片的相关图片展示
    + 实现点击某张图片的时候预览它（vue-preview）
    ```
        vue-preview网址：https://github.com/LS1231/vue-preview

        使用步骤：
        1、安装
        npm i vue-preview -S

        2、
        


    ```



##上午功能点复习
- 图文分享 列表 （imagelist.vue）
```
    1、分类的滑动功能
        采取的方案：

    2、利用mint-ui中的 延迟加载组件实现图片的列表功能
        使用的步骤：
        1、<ul>
              <li v-for="item in list">
                <img v-lazy="item">
              </li>
            </ul>

        2、image[lazy=loading] {
              width: 40px;
              height: 300px;
              margin: auto;
            }


```
- 图文分享 详情   (imageshow.vue)
```
    重点学习的是：vue-preview组件的使用
    使用的要求：
    1、要求我们将vue-preview组件特殊的扩展名配置到webpack.config.js中利用bable去解析es6语法
    {
        test: /vue-preview.src.*?js$/,
        loader: 'babel'
    }
    
    2、这个组件中使用了 svg这种文件，那么在webpack.config.js中
    的url-loader配置位置，要在test后面的正则表达式中，增加svg的扩展名

    3、img标签上的class不能去掉

    4、插件目前仅支持vue2.0以上版本

    步骤：
    1、安装 vue-preview   npm i vue-preview --save
    2、在api请求回来的数据基础上，增加 h,w 属性
    3、在 img标签上
        <img class="preview-img" :src="thumimg.src" height="100" @click="$preview.open(index, thums)">
        其中$preview 对象就是打开预览的组件对象
        并且open方法的两个参数的意义：
        1、index：当前图片的索引
        2、thums：表示要预览的图片数组


```

## 将评论组件集成在图文分享详情页面上
```
   评论组件：components/subcom/comment.vue

   在 imageshow.vue 要使用comment.vue组件步骤：
   1、导入comment.vue组件
   2、在imageshow.vue VM对象中增加components:{comment}
   3、在imageshow.vue 的template中使用<comment artid="?"></comment>
   

```