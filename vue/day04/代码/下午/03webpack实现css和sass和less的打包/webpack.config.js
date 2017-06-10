
module.exports={
	// 1.0 定义打包的入口文件路径
	entry:'./src/main.js',
	output:{
		path:'./src',   //打包以后的文件存放目录
		filename:'build.js'  // 打包以后生成的文件名称
	},
	module:{
		loaders:[
			{
				// 打包css文件
				test:/\.css$/,   //表示当前要打包的文件的后缀正则表达式
				loader:'style-loader!css-loader' //表示先利用css-loader解析.css文件，再调用style-loader打包
			},
			{
				// 打包 sass文件
				test:/\.scss$/,   //表示当前要打包的文件的后缀正则表达式
				loader:'style-loader!css-loader!sass-loader' //实现sass文件的打包
			},
			{
				// 打包less文件
				test:/\.less$/,   //表示当前要打包的文件的后缀正则表达式
				loader:'style-loader!css-loader!less-loader' //实现sass文件的打包
			}
		]
	}

}