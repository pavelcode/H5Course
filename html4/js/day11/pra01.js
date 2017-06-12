window.onload = function(){
	//得到操作元素
	var content = document.getElementById("content");
	var msg = document.getElementById("msg");
	var btn = document.getElementById("btn");
	btn.onclick = function(){
		//获得输入的信息
		var msg_value = msg.value;
		//alert("msg_value="+msg_value);  
		//创建对话的新li
		var li = document.createElement("li");
		li.className="msg right";
		li.innerHTML = msg_value;
		//添加新li
		content.appendChild(li);
		msg.value = "";  //清空输入框的内容
		//li.scrollIntoView();
	}
	//支持ctrl+回车提交信息  e.which=10 什么意思
	msg.onkeypress = function(evt){
		var e = evt||window.event;
		//在ff中 判断 ctrl+enter 是 e.ctrlKey && e.which ==13
		//在ie6中 判断ctrl+enter 是 e.ctrlKey && e.which ==10
		//alert(e.keyCode);
		if(e.ctrlKey&&(e.keyCode==13||e.keyCode==10)){
			//alert(btn.onclick);
			btn.onclick();
		}
	}
	
}
