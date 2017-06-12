/**
 * 获得DOM的节点属性
 */
//获得一个节点
//window.onload = function(){
//	var p = document.getElementById("my"); //<p id="my">Hello <strong>world!</strong></p>
//	document.write(p+"<br/>");
//	document.write(p.nodeName+"<br/>");//DIV 元素节点的标签名，跟tagName一致
//	document.write(p.nodeType+"<br/>");//1 说明是元素节点
//	document.write(p.nodeValue+"<br/>");//null 元素节点没有标签值
//	dodcument.write(p.innerHTML+"<br/>");//获得元素节点包含的内容,包含html标签
//	document.write(p.innerText); //获得元素节点包含的内容,去掉html标签
//}

//onload = function(){//<div id="mydiv"><em>斜体</em>我是<strong>加粗</strong></div>
//	var node = document.getElementById("mydiv");
//	document.write(node.childNodes.length+"<br/>");//3
//	document.write(node.childNodes[0]+"<br/>");//[object HTMLElement]
//	document.write(node.childNodes[0].nodeName+"<br/>");//EM
//	document.write(node.childNodes[0].nodeType+"<br/>");//1
//	document.write(node.childNodes[0].innerText+"<br/>");
//	//总结：对于元素节点，如果要获得里面的值，只能使用innerText，而不能使用nodeValue
//	document.write(node.childNodes[1]+"<br/>");//[object Text]
//	document.write(node.childNodes[1].nodeName+"<br/>");//#text
//	document.write(node.childNodes[1].nodeType+"<br/>");//3
//	document.write(node.childNodes[1].innerText+"<br/>");//undefined
//	document.write(node.childNodes[1].nodeValue+"<br/>");//我是
//	//总结：对于文本节点，如果要获得里面的值，只能使用nodeValue，而不能使用innerText
//	document.write(node.childNodes.length+"<br/>");//3
//	document.write(node.childNodes[2]+"<br/>");//[object HTMLElement]
//	document.write(node.childNodes[2].nodeName+"<br/>");//EM
//	document.write(node.childNodes[2].nodeType+"<br/>");//1
//	document.write(node.childNodes[2].innerText+"<br/>");
//}
	
//总结：直接节点的文字
//onload = function(){//<div id="mydiv"><em>斜体</em>我是<strong>加粗</strong></div>
//	var node = document.getElementById("my");
//	document.write(node.childNodes[0].nodeValue+"<br/>");
//	document.write(node.childNodes[1].innerText+"<br/>");
//}

//innerHTML与document.write();
//onload = function(){
//	var span = document.getElementById("myspan");
//	span.innerHTML="222";
//	document.write("333");
//}
//innerHTML是设置标签里面的内容，document.write是打印内容
	
//节点的层次关系
//onload = function(){
//	// <div id="mydiv"><em>斜体</em>我是<strong>加粗</strong></div>
//	var div = document.getElementById("mydiv");
//	document.write(div.childNodes[0]+"<br/>"); //取当前节点的子节点的第一个元素
//	document.write(div.childNodes[div.childNodes.length - 1]+"<br/>"); //去当前节点的子节点的最后一个元素
//	
//	document.write(div.childNodes[0].nodeName+"<br/>");//EM
//	document.write(div.firstChild.nodeName+"<br/>");//EM
//	document.write(div.childNodes[2].nodeName+"<br/>");//STRONG
//  document.write(div.lastChild.nodeName+"<br/>");	//STRONG
//  
//	
//	document.write(div.ownerDocument+"<br/>");
//	document.write(document+"<br/>");
//	document.write((div.ownerDocument===document)+"<br/>");//true
//	
//	document.write(div.parentNode.nodeName+"<br/>");//BODY
//	
//	document.write(div.lastChild.previousSibling.nodeValue+"<br/>"); //我是
//	document.write(div.firstChild.nextSibling.nodeValue+"<br/>");
//}


// 使用childNode获得某节点下的所有子节点和节点属性
//window.onload = function(){
//	var div = document.getElementById("mydiv"); //<div id="mydiv">我<strong>爱</strong>你</div>
//	document.write(div+"<br/>");
//	document.write(div.childNodes+"<br/>");//[object NodeList] 获得当前元素节点的所有子节点
//	document.write(div.childNodes.length+"<br/>");
//	//我<strong>爱</strong>你   
//	//第一个节点：我（文本节点）  第二个节点：<strong>爱</strong>（元素节点）  第三个节点 ：你（文本节点）
//	for(var i = 0;i<div.childNodes.length;i++){
//		document.write(i);
//		document.write(div.childNodes[i]);//[object Text] 是文本节点  [object HTMLElement] 是元素节点
//		document.write(div.childNodes[i].nodeName); //文本节点返回#text  元素节点返回标签名STRONG
//		document.write(div.childNodes[i].nodeType); //3 是文本节点 1元素节点
//		document.write(div.childNodes[i].nodeValue); //元素节点无返回值 文本节点返回值null
//		document.write(div.childNodes[i].innerHTML); //元素节点返回值undefined  文本节点返回值
//		document.write("----<br/>")
//	}
//}

//根据节点类型获得节点中的内容
//window.onload = function(){
//	var div = document.getElementById("mydiv");
//	var nodes = div.childNodes;
//	for(var i=0;i<nodes.length;i++){
//		if(nodes[i].nodeType==1){
//			document.write(nodes[i].innerHTML+"<br/>");  //标签节点
//		}else if(nodes[i].nodeType==3){
//		    document.write(nodes[i].nodeValue+"<br/>");//文本节点	
//		}
//	}
//}

//设置节点值
//window.onload = function(){
//	var div = document.getElementById("setdiv"); // <div id="setdiv">1</div>
//	//div.innerHTML = "好好学习，<strong>天天向上</strong>";
//	//div.nodeValue = "好好学习，<strong>天天向上</strong>"; //设置失败，div是元素节点，必须是文本节点才能使用nodeValue设置值
//	div.childNodes[0].nodeValue =  "好好学习，<strong>天天向上</strong>";
//}

//获取属性
//window.onload = function(){
//	var p = document.getElementById("my");  //<p id="my" class="myclass" title="mytitle" style="color:red"></p>
//	document.write(p.attributes+"<br/>"); //[object NamedNodeMap] 保存所有的属性节点
//	document.write(p.attributes.length+"<br/>");//4  属性的个数
//	document.write(p.attributes[0]+"<br/>");//[object Attr] 属性节点
//	document.write(p.attributes[0].nodeType+"<br/>");//2 说明是属性节点
//	document.write(p.attributes[0].nodeName+"<br/>");//color:red 属性名
//	document.write(p.attributes[0].nodeValue+"<br/>");//style 属性值

//	document.write(p.attributes["id"].nodeValue+"<br/>");//my
//	document.write(p.attributes.getNamedItem("id").nodeValue+"<br/>");//myt
//}

//空白字符问题
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	document.write(ul.childNodes.length+"<br/>");  //7 是三个节点，但是这里打印七，是因为包含的了空白字符
//	document.write(filterWhiteNode(ul.childNodes).length+"<br/>");//3 去掉空格之后
//	document.write(filterWhiteNode2(ul.childNodes).length+"<br/>");//3 去掉空格之后
//}
//
////忽略空白字符
//function filterWhiteNode(node){
//	var ret = [];
//	for(var i=0;i<node.length;i++){
//		//当是文本节点，并且开头和结尾包含了一个或多个空格,跳过空格，否则放入数组
//		if(node[i].nodeType===3&&/^\s+$/.test(node[i].nodeValue)){
//			continue;
//		}else{
//			ret.push(node[i]);
//		}
//	}
//	return ret;
//}
//这个不能讲，因为还没学removeChild
//function filterWhiteNode2(node){
//	for(var i=0;i<node.length;i++){
//		//当是文本节点，并且开头和结尾包含了一个或多个空格，
//		if(node[i].nodeType===3&&/^\s+$/.test(node[i].nodeValue)){
//			node[i].parentNode.removeChild(node[i]);  //去掉空白的字符
//		}
//	}
//	return node;
//}

//移除某个节点的空白节点
//window.onload = function(){
//	var ul = document.getElementById("myul"); 
//	document.write(ul.firstChild.noteName+"<br>");// 这个是一个空白
//	document.write(removeWhiteNode(ul).firstChild.nodeName);
//}
//function removeWhiteNode(nodes){
//	//document.write("111"+nodes.childNodes.length);
//	for(var i=0;i<nodes.childNodes.length;i++){
//		//当是文本节点，并且开头和结尾包含了一个或多个空格
//		if(nodes.childNodes[i].nodeType===3&&/^\s+$/.test(nodes.childNodes[i].nodeValue)){
//			nodes.childNodes[i].parentNode.removeChild(nodes.childNodes[i]);  //去掉空白的字符
//			document.write("111"+"<br/>");
//		}
//	}
//	return nodes;
//}

/**
 * 节点的操作 创建  复制  遍历 删除
 */
//创建节点
//window.onload = function(){
//创建节点，但是竟没有成功，需要制定创建节点的位置
//  var ul = document.getElementById("myul");
//	//创建一个文本对象
//	var text = document.createTextNode("new node");
//	//创建一个li对象
//	var li = document.createElement("li");
//	//把文本节点放到li节点里面
//	li.appendChild(text);
//	//把li对象放到ul
//	ul.appendChild(li);
//}

//确定位置添加节点 在ul节点添加li节点
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	//创建元素节点
//	var li = document.createElement("li");
//	ul.appendChild(li);
//	//创建文本节点
//	var text = document.createTextNode("新的节点");
//	li.appendChild(text);
//}

//文本节点添加在不同位置，测试节点添加思路
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	//创建元素节点
//	var li = document.createElement("li");
//	ul.appendChild(li);
//	//创建文本节点
//	var text = document.createTextNode("新的节点");
//	//ul.appendChild(text); //在ul底部添加文字
//	document.getElementsByTagName("body")[0].appendChild(text); //在body底部添加文字
//}

//同级节点指定位置之前添加节点
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	//创建元素节点
//	var p = document.createElement("p");
//  //获得指定位置的父节点
//  //document.write(ul.parentNode+"<br/>");//[object HTMLBodyElement]
//	ul.parentNode.insertBefore(p,ul);
//}

//在ul里面添加了p标签,与上面的区别
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	var p = document.createElement("p");
//	ul.parentNode.appendChild(p);
//}

//案例 dom02动态生成表格

//替换节点
//首先清除ul中空白节点，然后替换第一个li节点
/*
onload = function(){
   //获得ul对象
	var ul = document.getElementsByTagName("ul")[0];
	//创建一个li节点对象
	var li = document.createElement("li");
	var textNode = document.createTextNode("444");
	li.appendChild(textNode);//<li>444</li>
	var arr = filterWhiteWord(ul.childNodes);
	//替换第一个li节点对象
	ul.replaceChild(li,arr[0]);
}
*/

//直接获得li节点对象，使用新的节点对象替换旧的节点对象
/*
onload = function(){
    //获得ul对象
	var ul = document.getElementsByTagName("ul")[0];
	var li = document.getElementsByTagName("li")[0];
	
	var newli = document.createElement("li");
	var textNode = document.createTextNode("555");
	newli.appendChild(textNode);//<li>444</li>
	
	//替换第一个li节点对象
	ul.replaceChild(newli,li);
}
*/
/*
//替换是元素节点的文本节点对象
onload = function(){
	  //获得ul对象
	var ul = document.getElementsByTagName("ul")[0];
	var firstli = filterWhiteWord(ul.childNodes)[0];
	var textNode = document.createTextNode("444");
	//alert(firstli.childNodes[1]);
	firstli.replaceChild(textNode,firstli.childNodes[0]);
	
}
*/

//function filterWhiteWord(node){
//	var result = [];
//	for(var i=0;i<node.length;i++){
//		if(node[i].nodeType===3&&/^\s+$/.test(node[i].nodeValue)){
//			continue;
//		}else{
//			result.push(node[i]);
//		}
//	}
//	return result;
//}


//克隆节点
//window.onload = function(){
//	var ul = document.getElementById("myList");
//	var clone = ul.firstChild.cloneNode(true);
//	ul.appendChild(clone);
//}

//删除节点
//window.onload = function(){
//	var ul = document.getElementById("myList");
//	ul.removeChild(ul.firstChild);
//}

//案例 dom03 删除列表的列

/*
   下面先不讲
 */
//系统没有提供insertAfter
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	var p = document.createElement("p");
//	insertAfter(p,ul);
//	insertAfter2(p,ul);
//}
//在指定位置的之后添加标签元素	
//function insertAfter(newElement,targetElement){
//	var parent = targetElement.parentNode;//必须得到目标节点的父节点
//	//document.write(parent);
//	parent.insertBefore(newElement,targetElement.nextSibling); //ul的后一个同级节点
//}

//进行优化
//function insertAfter2(newElement,targetElement){
//	var parent = targetElement.parentNode;
//	if(parent.lastChild===targetElement){
//		ul.parentNode.appendChild(p);
//	}else{
//		parent.insertBefore(newElement,targetElement.nextSibling);
//	}
//}

//使用createElement创建input的会出现兼容问题
//window.onload = function(){
//	var body = document.getElementsByTagName("body")[0];
//	var input = document.createElement("input");
//	input.setAttribute("type","radio");
//	input.setAttribute("name","sex");
//	body.appendChild(input);
//}

//IE7及以下版本出现兼容性问题
//window.onload = function(){
//	var body = document.getElementsByTagName("body")[0];
//	if(是iE或version<=7){
//		var input = document.createElement("<input type='radio' name='sex'/>");
//	}else{
//	var input = document.createElement("input");
//	input.setAttribute("type","radio");
//	input.setAttribute("name","sex");
//	}
//	body.appendChild(input);
//}

//克隆节点第一个li
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	var clone = removeWhiteNode(ul).firstChild.cloneNode(true);
//	ul.appendChild(clone);
//}

//function removeWhiteNode(nodes){
//	//document.write("111"+nodes.childNodes.length);
//	for(var i=0;i<nodes.childNodes.length;i++){
//		//当是文本节点，并且开头和结尾包含了一个或多个空格
//		if(nodes.childNodes[i].nodeType===3&&/^\s+$/.test(nodes.childNodes[i].nodeValue)){
//			nodes.childNodes[i].parentNode.removeChild(nodes.childNodes[i]);  //去掉空白的字符
//			//document.write("111"+"<br/>");
//		}
//	}
//	return nodes;
//}
//删除节点  删除一个li
//window.onload = function(){
//	var ul = document.getElementById("myul");
//	ul.removeChild(removeWhiteNode(ul).firstChild);
//}
