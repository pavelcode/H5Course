//根据输入的行和列值，动态生成表格

function creatTab(){
	//获取用户输入的行数、列数
	var rows = document.getElementsByTagName("input")[0].value;
	var cols = document.getElementsByTagName("input")[1].value;
				
	//创建出table元素
	var tab = document.createElement("table");
	tab.border = "1";
	//var tr = null;
		//创建<tr><td>
		for(var i=0; i<rows; i++) {
			var tr = document.createElement("tr");
			for(var j=0; j<cols; j++) {
				var td = document.createElement("td");
				td.innerHTML = Math.floor(Math.random()*10);
				//td.style.background = randomColor();
				tr.appendChild(td);
			 }
				//把tbody放入tab当中
		   tab.appendChild(tr);	
		}
		
		//将table元素放入页面中
		document.body.appendChild(tab);
}
