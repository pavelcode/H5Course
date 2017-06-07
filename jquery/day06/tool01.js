$(function(){
	//字符串操作，去掉前后空格
//   var str = "   AAA   ";
//   document.write($.trim(str));
     
     //数组遍历
//   var arr = ["111","222","333"];
//   $.each(arr,function(index,value){
//   	document.write(index+"----"+value+"<br/>");
//   });
	
	//对象遍历
//	var obj = {
//		id:1,
//		name:"zhangsan",
//		sex:"男"
//	}
//	$.each(obj,function(name,value){
//		document.write(name+"----"+value+"<br/>");
//	});
	
	//数组筛选
//	var arr = [2,4,5,10,36,92];
//	var arrGrep = $.grep(arr,function(element,index){
//		//索引值小于4，元素值小于7
//		return index<4&&element<7;
//	});
//	document.write(arrGrep);

    //数组的元素变更（都+1）
//  var arr = [2,4,5,10,36,92];
//	var arrMap = $.map(arr,function(element,index){
//		//索引值小于4，元素值小于7
//		if(index<4&&element<7){
//			return element+1;
//		}
//	});
//	document.write(arrMap);

     //查找元素的下标
//   var arr = [2,4,5,10,36,92];
//   var index = $.inArray(36,arr);
//   document.write(index);//4

     //数组合并
//   var arr1 = ["111","222"];
//   var arr2 = ["333","444"];
//   document.write($.merge(arr1,arr2));

     //删除相同的DOM对象
//	  var divs = $("div").get();//获得所有的div元素
//	  document.write(divs.length+"<br/>");
//	  var alldivs = divs.concat(divs);//把div元素重新添加
//	  document.write(alldivs.length+"<br/>");
//	  $.unique(alldivs);
//	  document.write(alldivs.length+"<br/>");

      
//    var arr = [];
//    document.write($.isArray(arr)+"<br/>"); //判断是否是数组
//    var fn = function(){};
//    document.write($.isFunction(fn)+"<br/>");//判断是否是函数
//    var obj = {};
//    document.write($.isEmptyObject(obj)+"<br/>");//判断是否是空对象
    
//    var obj = {name:12};//true
//    obj = new Object();//true
//    obj = new Date();//false
//    document.write($.isPlainObject(obj));//判断是否是纯粹对象  就是使用{}或new Object创建的，不是由构造函数创建     
	  
	  //一个节点是否包含另一节点
//	  document.write($.contains($("#div").get(0),$("span").get(0))+"<br/>");
	  //判断数据类型
//	  document.write($.type("sss")+"<br/>");
	  //判断是否是数值
//	  document.write($.isNumeric(1.3)+"<br/>");
	  //判断是否是window对象
//	  var win = window;
//	  document.write($.isWindow(win)+"<br/>");
	  
	  //把对象转化为url的参数
//	  var stu = {
//	  	name:"zhang",
//	  	age:12
//	  };
//	  document.write($.param(stu)+"<br/>");
	  
	  //代理对象，解决this指向问题
	 var obj = {
	 	name:"zhang",
	 	test:function(){
	 		alert(this.name);
	 	}
	 };
	 
	// $("button").click(obj.test);//这里的this为button对象，所有弹出为空
	 $("button").click($.proxy(obj,"test"));//重新把this指向obj，调用obj的test方法
	  
});




