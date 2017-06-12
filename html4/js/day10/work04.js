onload = function(){
		var name = document.getElementById("name");
		var age = document.getElementById("age");
		var btn = document.getElementById("btn");
		var delbtn = document.getElementById("delbtn");
		var tab = document.getElementById("table");
		var selectname = document.getElementById("selectname");
		var selectbtn = document.getElementById("selectbtn");

	
	   btn.onclick = function(){	
				var tr = document.createElement("tr");
		        var td1 = document.createElement("td");
		        td1.innerHTML = name.value;
		        var td2 = document.createElement("td");
		        td2.innerHTML=  age.value;
		        var td3 = document.createElement("td");
		        td3.innerHTML = "<a href='#'>delete</a>";
		        td3.firstChild.onclick = myDelete; //添加删除事件
		        tr.appendChild(td1);
		        tr.appendChild(td2);
		        tr.appendChild(td3);
		      
		        
		        tab.children[0].appendChild(tr);
		        
		        name.value = "";
		        bridthday.value="";
				
	   }
	   
	    function myDelete(){
	   	 this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	   }
	    
	    
	   selectbtn.onclick = function(){
	   	
	   }
       
    
	

	
}
