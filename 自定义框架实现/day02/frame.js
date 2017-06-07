//事件模块
var event = function(){};
	event.prototype = {
	    on: function (id, type, fn){
	        //var dom = document.getElementById(id);
	        var dom = $$.isString(id)?document.getElementById(id):id;
	    //如果支持
	    //W3C版本 --火狐 谷歌 等大多数浏览器
	    //如果你想检测对象是否支持某个属性，方法，可以通过这种方式
	    if(dom.addEventListener ){
	        dom.addEventListener(type, fn, false);
	    }else if(dom.attachEvent){
	        //如果支持 --IE
	        //
	        dom.attachEvent('on' + type, fn);
	    }
	  },
	  un:function(id, type, fn){
	    //var dom = document.getElementById(id);
	    var dom = $$.isString(id)?document.getElementById(id):id;
	    if(dom.removeEventListener){
	        dom.removeEventListener(type, fn);
	    }else if(dom.detachEvent){
	        dom.detachEvent(type, fn);
	    }
	 },
	/*点击*/
    click : function(id,fn){
        this.on(id,'click',fn);
    },
    mouseover:function(id,fn){
        this.on(id,'mouseover',fn);
    },
    mouseout:function(id,fn){
        this.on(id,'mouseout',fn);
    },
    /*悬浮*/
    hover : function(id,fnOver,fnOut){
        if(fnOver){
            this.on(id,"mouseover",fnOver);
        }
        if(fnOut){
            this.on(id,"mouseout",fnOut);
        }
    },
     //事件委托
    delegate:function (pid, eventType, selector, fn) {
        //参数处理
        var parent = $$.$id(pid);
        function handle(e){
            var target = $$.GetTarget(e);
            if(target.nodeName.toLowerCase()=== selector || target.id === selector || target.className.indexOf(selector) != -1){
                // 在事件冒泡的时候，回以此遍历每个子孙后代，如果找到对应的元素，则执行如下函数
                // 为什么使用call，因为call可以改变this指向
                // 大家还记得，函数中的this默认指向window，而我们希望指向当前dom元素本身
                fn.call(target);
            }
        }
        //当我们给父亲元素绑定一个事件，他的执行顺序：先捕获到目标元素，然后事件再冒泡
        //这里是是给元素对象绑定一个事件
        parent[eventType]=handle;
    },
    //事件基础
    getEvent:function(event){
        return event?event:window.event;
    },
    //获取目标
    GetTarget :function(event){
        var e = $$.getEvent(event);
        return e.target|| e.srcElement;
    },
    //组织默认行为
    preventDefault:function(event){
        var event = $$.getEvent(event);
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //阻止冒泡
    stopPropagation:function(event){
        var event = $$.getEvent(event);
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}
$$.event = new event();