/** 第一种实现方法 */
window.onload = function(){
	var filldiv = document.getElementById("filldiv");
	var oSpan = document.getElementById("percent");
	var timer = setInterval(function(){
	//在使用JS获取非行内样式，不可以直接写obj.style
	filldiv.style.width = parseInt(window.getComputedStyle(filldiv,null).width) + 1 + "px";
	//改变百分比数字  number.toFixed(3)，将number保留3位小数
	oSpan.innerHTML = (parseInt(filldiv.style.width)/200 * 100).toFixed(1) + "%";
	  if(filldiv.style.width == "200px") {
			clearInterval(timer);
	   }
	},100);
};
		
/** 第二种实现方法 */
//window.onload = function(){
//	var filldiv = document.getElementById("filldiv");
//	var oSpan = document.getElementById("percent");
//	var num = 1;
//	var timer = setInterval(function(){
//	filldiv.style.width = num++ + "px";
//	//改变百分比数字  number.toFixed(3)，将number保留3位小数
//	oSpan.innerHTML = (parseInt(filldiv.style.width)/200 * 100).toFixed(1) + "%";
//	if(filldiv.style.width == "200px") {
//		   clearInterval(timer);
//		}
//	},100);
//}