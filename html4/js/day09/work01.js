//实现隔行变色效果
window.onload = function(){
	var lis = document.getElementsByTagName("li");
	for(var i =0;i<lis.length;i++){
		if(i%2==0){
		lis[i].style.background="red";
		}else{
		 lis[i].style.background="green";
		}
	}
}

//点击表格，显示图片
function test(num){
	var img = document.getElementById("showImg");
	img.src=num+".jpg";
}
