
module.exports={
	// 1.0 定义打包的入口文件路径
	entry:'./src/main.js',
	output:{
		path:'./src',   //打包以后的文件存放目录
		filename:'build.js'  // 打包以后生成的文件名称
	}	
}