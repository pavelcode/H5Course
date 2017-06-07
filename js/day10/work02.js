onload = function(){
		var name = document.getElementById("name");
		var age = document.getElementById("age");
		var btn = document.getElementById("btn");
		var tab = document.getElementById("table");
		var dela;
	
	   btn.onclick = function(){	
				var tr = document.createElement("tr");
		        var td1 = document.createElement("td");
		        td1.innerHTML = name.value;
		        var td2 = document.createElement("td");
		        td2.innerHTML=  age.value;
		        var td3 = document.createElement("td");
		        td3.innerHTML=  randomWord(false,6,6);
		        var td4 = document.createElement("td");
		         td4.innerHTML = "<a href='#'>delete</a>";
                 td4.firstChild.onclick = myDelete; //添加删除事件
		        tr.appendChild(td1);
		        tr.appendChild(td2);
		        tr.appendChild(td3);
		        tr.appendChild(td4);
		       
		        tab.children[0].appendChild(tr);
		        
		        name.value = "";
		        age.value="";
				
		}
	   function myDelete(){
	   	 this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	   }

	
	 /*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/
 
	function randomWord(randomFlag, min, max){
	    var str = "",
	        range = min,
	        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	 
	    // 随机产生
	    if(randomFlag){
	        range = Math.round(Math.random() * (max-min)) + min;
	    }
	    for(var i=0; i<range; i++){
	        pos = Math.round(Math.random() * (arr.length-1));
	        str += arr[pos];
	    }
	    return str;
	}
	
}
