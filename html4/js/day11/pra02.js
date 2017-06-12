onload = function(){
	var all = document.getElementById("all");
	var inputs = document.getElementsByTagName("input");
	all.onclick = function(){
		//alert(all.checked);
		if(all.checked){
			for(var i=0;i<inputs.length;i++){
				inputs[i].checked = true;
			}
		}
		else{
			for(var i=0;i<inputs.length;i++){
				inputs[i].checked = false;
			}
		}
		
	}
}