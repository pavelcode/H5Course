/*
 * 实现简单登录
 */
"use strict"
//创建一个服务端对象
var http = require("http");
//创建一个服务
var server = http.createServer(function(request,response){
  var requestUrl = request.url;
  console.log(requestUrl);
   switch(requestUrl){
  	case "/loginPage": //请求登录页面
  	  loginPage(request,response);
  	break;
  	case "/login": //请求登录
  	  login(request,response);
  	break;
  	default:  //其他处理
	  	response.writeHead(404,{});
	  	response.end();
  	break;
  }
  
  
});

function loginPage(request,response){
	
	console.log("请求登录页面");
	response.writeHead(200,{
   	'Content-Type':"text/html",
   });
  response.write('<!DOCTYPE html>');
  response.write('<html lang="en">');
  response.write('');
  response.write('<head>');
  response.write('  <meta charset="UTF-8">');
  response.write('  <title>user login</title>');
  response.write('</head>');
  response.write('');
  response.write('<body>');
  response.write('  <form action="/login" method="post">');
  response.write('    <table border="1">');
  response.write('      <tr>');
  response.write('        <td>user</td>');
  response.write('        <td>');
  response.write('          <input type="text" name="username">');
  response.write('        </td>');
  response.write('      </tr>');
  response.write('      <tr>');
  response.write('        <td>pass</td>');
  response.write('        <td>');
  response.write('          <input type="password" name="password">');
  response.write('        </td>');
  response.write('      </tr>');
  response.write('      <tr>');
  response.write('        <td></td>');
  response.write('        <td>');
  response.write('          <input type="submit">');
  response.write('        </td>');
  response.write('      </tr>');
  response.write('    </table>');
  response.write('  </form>');
  response.write('</body>');
  response.write('');
  response.write('</html>');
  response.end();

}

var queryString = require("querystring");  //载入queryString模块

function login(request,response){
	console.log("登录");
	var postDate = "";//保存客户端发送的请求数据
	request.on("data",function(part){ //获得客户端发送的数据 data事件，每次来一部分数据
		postDate+=part;
	});
	request.on("end",function(){ //end事件，接收完数据之后，执行
		console.log(postDate);
		var obj = queryString.parse(postDate); //parse把字符串转化为对象
		console.log(obj);
	});
	response.end();
}

//启动服务
server.listen(8080,function(error){
   console.log("listen 8080 port");
})
