onload = function(){
		var name = document.getElementById("name");
		var bridthday = document.getElementById("bridthday");
		var btn = document.getElementById("btn");
		var delbtn = document.getElementById("delbtn");
		var tab = document.getElementById("table");
		var count =0;

	
	   btn.onclick = function(){	
				var tr = document.createElement("tr");
		        var td1 = document.createElement("td");
		        td1.innerHTML = name.value;
		        var td2 = document.createElement("td");
		        td2.innerHTML=  bridthday.value;
		        var td3 = document.createElement("td");
		        td3.innerHTML=  betweenDay(bridthday.value);
		        var td4 = document.createElement("td");
		         td4.innerHTML = "<a href='#'>delete</a>";
		        td4.firstChild.onclick = myDelete; //添加删除事件
		      
		        tr.appendChild(td1);
		        tr.appendChild(td2);
		        tr.appendChild(td3);
		        tr.appendChild(td4);
		        count++;
		        if(count%2==0){
		        	 tr.className="red";
		        }else{
		        	  tr.className="greenyellow";
		        }
		        
		        tab.children[0].appendChild(tr);
		        
		        name.value = "";
		        bridthday.value="";
				
	   }
	   function myDelete(){
	   	 this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	   }
	   
	   function betweenDay(date){
	   	var date1= new Date();
		var date2=new Date(date);
		var a = date1.getTime()/1000/60/60/24; //现在到1970年经过的天数
		var b = date2.getTime()/1000/60/60/24;
		return "你已经经历了"+Math.floor(Math.abs(a-b))+"个日日夜夜";
	   }
	   
	    function deleteRow(input) {  
	    	alert(111);
        var s = input.parentNode.parentNode.rowIndex;  
        document.getElementById("tableid").deleteRow(s);  
        var num = document.getElementById("tableid").rows.length;  
        for ( var i = 1; i < num; i += 1) {  
            table.rows[i].cells[0].innerHTML = i; //把每行的每一列设为i  
  
        }  
        alert("删除成功！！");  
    }  
	

	
}
