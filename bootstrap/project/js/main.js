
'use strict'

$(function(){
	
	function resize(){
		//获得屏幕的宽度
		var windowWidth = $(window).width();
		//判断是否是小屏幕
		var isSmallScreen = windowWidth<768;
		//循环里面每个对象
		//alert($("#main_ad .carousel-inner .item").length);
		$("#main_ad .carousel-inner .item").each(function(i,item){
			//获得item对象
			var $item = $(item);
	        //alert($item.data("image-lg"));
	        //根据屏幕大小，获取图片连接
	        var imageSrc = $item.data(isSmallScreen?"image-sm":"image-lg");
	        //alert(imageSrc);
	        //设置图片
	        $item.css("backgroundImage",'url("'+imageSrc+'")');
	        //如果小屏幕的话，使用<img>
	        if(isSmallScreen){
	          $item.html('<img src="'+imageSrc+'">');
	        }else{
	          $item.empty();
	        }
		});
	}
	//添加一个屏幕尺寸修改事件
	//trigger事件直接出发一次
	$(window).on("resize",resize).trigger("resize");
	
	//设定产品推荐的宽度
	var $ulContainer = $(".nav-tabs");
	//var width = 0;
	var width = 30;  //因为默认使用box-size：border-box，所以需要加上一个大于边界的值
	//得到ul中的所有li对象
	$ulContainer.children().each(function(index,element){
		// alert(element.nodeName);
		//得到li的总宽度
		width+=element.clientWidth;
	});
	//如果屏幕宽度小于ul的宽度
//	console.log(width);
//	console.log($(window).width());
	if(width>$(window).width()){
	  $ulContainer.css("width",width);
	}
	
	//新闻列表设置链接点击
	var $newstitle = $(".new-title");
	$("#news .nav-pills a").on("click",function(){
		//获得当前对象
		var $this = $(this);
		//获得标题内容
		var title = $this.data("title");
		//alert(title);
		//设置内容
		$newstitle.text(title);
	});
	
	//实现手指滑动幻灯片效果
	//获得幻灯对象
	var $carousel = $(".carousel");
	//给幻灯注册开始触碰事件
	var startX,endX;
	$carousel.on("touchstart",function(e){
		//alert($carousel);
		//console.log(e.originalEvent.changedTouches[0].clientX);
		startX = e.originalEvent.changedTouches[0].clientX;
	});
	$carousel.on("touchmove",function(e){
		//alert($carousel);
		//console.log(e.originalEvent.changedTouches[0].clientX);
		endX = e.originalEvent.changedTouches[0].clientX;
	});
	
	$carousel.on("touchend",function(e){
		//求出两点之间的横坐标距离
		var distance = Math.abs(startX-endX);
		if(distance>10){
			$(this).carousel(startX>endX?"next":"prev");
		}
	})
	
	
	
});
