
window.onload = function(){
	var count_div = document.getElementById("count_div");
	var worker = new Worker("work.js");
	//得到后台传递的信息
	worker.onmessage = function(e){
		count_div.innerHTML = e.data;
	}
}
