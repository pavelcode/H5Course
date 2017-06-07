window.onload = function() {
					waterFall("wrap")
				} //
			window.onresize = function() {
				waterFall("wrap")
			}

			function waterFall(element, space, children) {
				if (!element) return;
				space = space || 10; //各个元素上下之间的空隙高度
				children = children || "div"; //前三行默认设置
				
				var wrap = document.getElementById(element);
				
				var water = wrap.getElementsByTagName(children);
				
				var spaceWidth = water[0].offsetWidth; //获取子元素宽度(offsetWidth会获取块级元素的padding和border)
				
				var wrapWidth = wrap.offsetWidth; //获取外框元素宽度
				
				var colNum = Math.floor(wrapWidth / spaceWidth); //计算获取外框元素所能承受列数
				
				var padding = Math.floor((wrapWidth - colNum * spaceWidth) / (colNum + 1)); //计算外框元素剩余宽度并计算左右留白
				
				var column = new Array();
				
				var maxHeight = 0;
				for (var i = 0; i < colNum; i++) { //初始化数组来计算各列初始top值和left值
					column[i] = new Object();
					column[i].top = space;
					column[i].left = (spaceWidth * i) + padding * (i + 1); //计算各列距离左侧距离
				}
				for (var i = 0; i < water.length; i++) { //遍历所有子元素及瀑布流布局
					
					//计算该子元素属于第几列
					if ((i+1) % colNum == 0) {
						sub = colNum;
					} else {
						sub = (i+1) % colNum;
					}
					_this = water;
					_this[i].style.position = "absolute";
					_this[i].style.top = column[sub - 1].top + "px";
					_this[i].style.left = column[sub - 1].left + "px";
					column[sub - 1].top += _this[i].offsetHeight + space; //计算各列最新高度以便赋值
				}
				for (var i = 0; i < colNum; i++) { //获取瀑布流整体布局高度
					if (column[i].top > maxHeight) maxHeight = column[i].top;
				}
				wrap.style.height = maxHeight + "px"; //给外框元素赋值以防止出现子元素溢出外框元素
			}