function move(ele, json) {
	clearInterval(ele.timer);

	for (var attr in json) {
		ele.timer = setInterval(function() {
			var speedX = 0;
			if (json[attr] >= ele.style[attr]) {
				speedX = Math.ceil((json[attr] - ele.offsetLeft) / 8);
			} else {
				speedX = Math.floor((json[attr] - ele.offsetLeft) / 8);
			}

			ele.style[attr] = ele.style[attr] + speedX + "px";
			if (ele.offsetLeft == json[attr]) {
				clearInterval(ele.timer);
			}
		}, 30);
	}

}

function parabola(start, end, rate){
		var a = rate || 0.002;
		//y = a*x*x + b*x + c 
		//由于过原点，so C等于0
		//b = (y-a*x*x)/x
		
		//终点坐标（相对）
		var targetCoord = {
			x : end.offsetLeft - start.offsetLeft,
			y : end.offsetTop - start.offsetTop
		}
		
		//原点坐标（绝对)
		var centerCoord = {
			x : start.offsetLeft,
			y : start.offsetTop
		}
		
		b = (targetCoord.y-a*targetCoord.x*targetCoord.x)/targetCoord.x;
		var offsetX = 0;
		var timer = setInterval(function(){
			var speedX = Math.ceil((targetCoord.x-offsetX)/16);
			//实际坐标 = 原点坐标 + 偏移量
			start.style.left = centerCoord.x + (offsetX+=speedX) +"px";
			start.style.top = centerCoord.y + a*offsetX*offsetX + b*offsetX + "px";
			if(start.offsetLeft >= end.offsetLeft) {
				clearInterval(timer);
			}
		},10);
}
