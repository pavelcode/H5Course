//引用gulp模块
var gulp = require('gulp');
//执行测试任务，第一个参数是任务名
gulp.task('test', function() {
  // 将你的默认的任务代码放在这
  console.log(1111);
});

//复制文件任务
gulp.task('copy', function() {
  //src是文件源，以管道形式发送到目的地
  gulp.src("src/index.html").pipe(gulp.dest("dist/"));
});

//压缩CSS
cssmin = require('gulp-minify-css');
gulp.task('minify-css', function () {
    gulp.src('src/css/*.css')
	.pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

//观察任务
gulp.task('watch', function() {
  // 文件发生变化，执行copy任务
  gulp.watch(("src/index.html"),['copy']);
  gulp.watch(("src/css/*.css"),['minify-css']);
});

//gulp插件 自动编译Less  gulp-less
var less = require('gulp-less');
var path = require('path');
gulp.task('less', function () {
  return gulp.src('src/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/css'));
});

//gulp-concat 合并文件
var concat = require('gulp-concat');
gulp.task('concat', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});


//browserSync配置
var browserSync = require('browser-sync').create();
// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


/**
 * 完整环境搭建案例
 */
//Less文件的编译，压缩
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
gulp.task("style",function(){
	gulp.src(["src/style/*.less","!src/style/_*.less"])
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest("dist/style"))
	.pipe(browserSync.reload({stream:true}));  //游览器刷新一下
});
//JS合并  压缩  混淆
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
gulp.task("js",function(){
	gulp.src("src/js/*.js")
	.pipe(concat("all.js"))
	.pipe(uglify()) 
	.pipe(gulp.dest("dist/js"))
	.pipe(browserSync.reload({stream:true}));  //游览器刷新一下
});
//img复制
gulp.task("img",function(){
	gulp.src("src/img/*.*")
	.pipe(gulp.dest("dist/img"))
	.pipe(browserSync.reload({stream:true}));  //游览器刷新一下
});
//html压缩
var htmlmin = require("gulp-htmlmin");
gulp.task("html",function(){
	gulp.src("src/*.html")
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest("dist/img"))
	.pipe(browserSync.reload({stream:true}));  //游览器刷新一下
});

//启动browser-sync
var browserSync = require("browser-sync");
gulp.task("serve",function(){
	browserSync({
		server:{
			baseDir:["dist"]
		},
	},function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
    //自动执行任务
    gulp.watch("src/style/*.less",["style"]);
    gulp.watch("src/js/*.js",["js"]);
    gulp.watch("src/img/*.*",["img"]);
    gulp.watch("src/*.html",["html"]);
});