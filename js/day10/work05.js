onload = function(){
		var name = document.getElementById("name");
		var bridthday = document.getElementById("bridthday");
		var btn = document.getElementById("btn");
		var delbtn = document.getElementById("delbtn");
		var tab = document.getElementById("table");

	
	   btn.onclick = function(){	
				var tr = document.createElement("tr");
		        var td1 = document.createElement("td");
		        td1.innerHTML = name.value;
		        var td2 = document.createElement("td");
		        td2.innerHTML=  bridthday.value;
		        var td3 = document.createElement("td");
		        td3.innerHTML= "<a href='#' deleteRow='del(this)'>删除</a>";
		      
		        tr.appendChild(td1);
		        tr.appendChild(td2);
		        tr.appendChild(td3);
		        
		        tab.children[0].appendChild(tr);
		        
		        name.value = "";
		        bridthday.value="";
				
	   }
	   delbtn.onclick = function(){
        var rowCount = tab.rows.length; // 获得一共多少行，因为不删除标题，所以索引从 1 开始  
        for(var i=1;i<rowCount;i++){  
            tab.deleteRow(1); // 因为删除一行以后下面的行会顶上来，所以一直删除第一行即可  
        }  
    }  
	

	
}
