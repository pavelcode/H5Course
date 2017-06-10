# 业务功能
## 实现新闻资讯列表

## 新闻详情
    - 上半部分是展示当前这个新闻的详细信息
    - 下半部分实现评论（将评论封装成一个单独的组件在新闻详情页面中使用）
    - 父组件向子组件传值


## 新闻详情和新闻列表中的日期格式化 
```
    日期格式化采取的是在main.js中注册一个全局过滤器
    再结合moment.js来实现的
    写法：
    import moment from 'moment';

    Vue.filter('datefmt',function(input,fmtStr){
        fmtStr = fmtStr?fmtStr:'YYYY-MM-DD';
        // YYYY-MM-DD 
        return moment(input).format(fmtStr);
    });

    用法：
    {{item.add_time | datefmt}}

```

## 图片分享模块
- 图片列表（mint-ui中的延迟加载）
- 图片的详情
    + 9宫格实现这个图片的相关图片展示
    + 实现点击某张图片的时候预览它（vue-preview）
