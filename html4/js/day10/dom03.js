//第一种方式
//var table;
//var tr;
//
//onload = function(){
// table = document.getElementById("mytable");
// tr = document.getElementsByTagName("tr");	
//}
//
//function deleteRows(num){
//	if(num==1){
//		//tr[num].parentNode.removeChild(tr[num]);
//		tr[num].setAttribute("style","display:none")
//	}
//	if(num==2){
//		//tr[num].parentNode.removeChild(tr[num]);
//		tr[num].setAttribute("style","display:none")
//	}
//	if(num==3){
//		//tr[num].parentNode.removeChild(tr[num]);
//		tr[num].setAttribute("style","display:none")
//	}
//	if(num==4){
//		//tr[num].parentNode.removeChild(tr[num]);
//		tr[num].setAttribute("style","display:none")
//	}
//	if(num==5){
//		//tr[num].parentNode.removeChild(tr[num]);
//		tr[num].setAttribute("style","display:none")
//	}
//	if(num==6){
//		//tr[num].parentNode.removeChild(tr[num]);
//		tr[num].setAttribute("style","display:none")
//	}
//}

//第二种方式
window.onload = function(){
			var links = document.getElementsByName("delbtn");
			for(var i=0; i<links.length; i++) {
				links[i].onclick = function(){
					var tr = this.parentNode.parentNode;
					var tbody = tr.parentNode;
					tbody.removeChild(tr);
				}
			}
		}





