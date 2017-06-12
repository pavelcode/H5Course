document.onclick = function(e){
		var e = e || event;
		new Fire({left:e.clientX, top: e.clientY}).init().launch();
	}
	
	function Fire(target){
		//创建一个div对象
		this.ele = document.createElement("div");
		//初始化操作
		this.init = function(){
			//把div对象添加到body中
			document.body.appendChild(this.ele);
			this.ele.className = "fire";
			//设置div显示的左边位置
			this.ele.style.left = target.left+"px";
			//设置div显示的垂直方向的位置  div停留在屏幕的下方
			this.ele.style.top = document.body.offsetHeight - this.ele.offsetHeight + "px";
			return this;
		}
		//底部div运动上升运动到鼠标位置
		this.launch = function(){
			var that = this;
			//让div从垂直方向上移动到鼠标位置，大小从50变成3（有一个远去的效果），执行完之后 执行回调函数
			animate(this.ele, {top: target.top, height: 3}, {callback:function(){
				that.explode();
			}});
		}
		//当div运动到鼠标位置，随机产生烟花效果  explode爆炸
		this.explode = function(){
			//移除上升的div
			document.body.removeChild(this.ele);
			//产生一个
			var count = Math.round(Math.random()*20+30);
			for(var i=0; i<count; i++){
				new Spark(target).init().move();
			}
		}
	}
	//烟花
	function Spark(target){
		//产生烟花片
		this.ele = document.createElement("div");
		
		this.init = function(){
			document.body.appendChild(this.ele);
			//设定样式
			this.ele.className = "spark";
			this.ele.style.borderRadius = "50%";
			//设定位置
			this.ele.style.left = target.left + "px";
			this.ele.style.top = target.top + "px";
			//设定颜色
			this.ele.style.background = randomColor();
			//设定初始速度
			this.speedX = Math.round(Math.random()*40)-20;
			this.speedY = Math.round(Math.random()*40)-30;
			return this;
		}
		
		this.move = function(){
			var that = this;
			var timer = setInterval(function(){
				//自由落体运动
				that.ele.style.left = that.ele.offsetLeft + that.speedX + "px";
				that.ele.style.top = that.ele.offsetTop + that.speedY++ + "px";
				//如果屏幕
				if(that.ele.offsetTop >= document.body.offsetHeight) {
					that.killself();
					clearInterval(timer);
				}
			},30);
		}
		
		this.killself = function(){
			document.body.removeChild(this.ele);
		}
	}