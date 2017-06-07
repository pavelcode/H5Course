/*
 * 事件分类:鼠标事件，键盘事件，窗口事件
 */
//window.onload = function(){  /<input type="submit" value="提交" />
//var input = document.getElementsByTagName("input")[0];
//鼠标事件
//input.onclick = myevent;    //单击事件
//input.ondblclick = myevent; //双击事件
//input.onmousedown = myevent; //鼠标按下事件
//input.onmouseup = myevent;   //鼠标弹起事件
//input.onmouseover = myevent; //当鼠标移动到元素上
//input.onmouseout = myevent;  //当鼠标从元素移开
//input.onmousemove = myevent; //鼠标移动事件
	
//案例：event03
//案例：event04
//案例： dom09
	
//键盘事件
//window.onkeydown = myevent;//键盘按下任意键
//window.onkeypress = myevent;//键盘按下任何键或按住
//window.onkeyup = myevent;//键盘按下任意键抬起的时候
	
// function myevent(){
//	alert("keyevent");
// }
//};

//案例dom07

//窗口事件
//window.onload = mywindowevent;  //当窗口加载完成之后
//window.onunload = mywindowevent;  //窗口卸载的时候，  刷新页面，界面会先卸载，再重新加载
//window.onload = function(){     
//	var input = document.getElementsByTagName("input")[0];
//	input.onselect = mywindowevent;  //当选中输入框的文字的时候调用
//	input.onchange = mywindowevent; //当内容改变，且失去焦点的时候调用
	//input.onfocus = mywindowevent; //获得焦点的时候
	//input.onblur = mywindowevent; //失去焦点的时候
//}

//window.onload = function(){
////内容提交  必须包含在form中
// var form = document.getElementsByTagName("form")[0]; 
// form.onsubmit=mywindowevent;
// window.onresize = mywindowevent; //窗口大小变化的时候
// window.onscroll = mywindowevent; //当滚动条滑动的时候
//}

//function mywindowevent(){
//	alert("windowevent");
//}

/*
 事件对象
 */
//鼠标事件
//window.onload = function(){
//	document.onclick = function(evt){ //document添加点击事件
//		alert(evt);//[object MouseEvent]
//	}
//}
//键盘事件
//window.onload = function(){
//	document.onkeydown = function(evt){
//		alert(evt);//[object KeyboardEvent]
//	}
//}
//事件不兼容
//window.onload = function(){
//	document.onclick = function(evt){
//		alert(evt);//IE不支持
//		alert(window.event);//FireFox不支持
//	}
//}
//兼容
//window.onload = function(){
//	document.onclick = function(evt){
//		var event = evt||window.event;
//		alert(event);
//	}
//}

//判断shift alt ctrl 按下  
//window.onload = function() {
//document.onclick = function(evt){
//	 alert(getKey(evt));
//}
//}
//function getKey(evt) {
//	var e = evt||window.event;
//	//保存按键的数组
//	var keys= [];
//	if(e.shiftKey)keys.push("shift");
//	if(e.altKey)keys.push("alt");
//	if(e.ctrlKey)keys.push("ctrl");
//	return keys;
//}

/**
 * 获得按键的ASCII码   这个不讲
 */
//使用onkeydown，火狐,谷歌,微软支持 不区分大小写
//window.onload = function(){
//	document.onkeydown = function(evt){
//		var e = evt||window.event;
//		alert(e.keyCode);
//	}
//}
/*
 * 火狐支持大小写，IE和opera不支持
 */
//window.onload = function(){
//	 document.onkeypress = function(evt){
//	 	var e = evt||window.event;
//	 	alert(e.charCode);
//	 }
//}

//按键兼容
//window.onload = function(){
//	document.onkeypress = function(evt){
//		alert(getkeyCode(evt));
//	}
//}
//function getkeyCode(evt){
//	var e = evt||window.event;
//	if(typeof e.charCode=='number'){
//		return e.charCode;
//	}else{
//		return e.keyCode;
//	}
//}

//或
//document.onkeydown = function(evt) {
//	var e = evt || event;
//	var code = e.keyCode || e.which;
//	document.write(code+"<br/>")
//}