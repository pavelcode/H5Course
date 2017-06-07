//定义两个二维空间的点对象，并能够求出彼此的距离

//定义3个徒弟
//孙--》name，武器，
//技能：吃斋，念佛，取经，除妖
//猪--》name，媳妇，
//技能：吃斋，念佛，取经，牵马
//沙--》name，住址，
//技能：吃斋，念佛，取经，挑行李。。。


//把所有的三位水仙花数，保存到数组中，求出水仙花数的最大值和最小值，并按照从大到小顺序排列打印，最后求出这些数的和，平均数


/*
var point1 = {
	x:20,
	y:30
};

var point2 ={
	x:50,
	y:10
}
function distance(p1,p2){
	var d = (p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y);
	return Math.sqrt(d);
}

document.write(distance(point1,point2));
*/

/*
var sun ={
	name:"孙悟空",
	weapean:"金箍棒",
	eat:function(){
		return "吃斋";
	}, 
	speak:function(){
		return "念经";
	},
	walk:function(){
		return "取经";
	},
	task:function(){
		return "除妖";
	}
};

var sun = new Object();
sun.name="孙悟空";
sun.weapean="金箍棒";
function eat(){
	return "吃斋";
}
function speak(){
	return "念经";
}
function walk(){
	return "取经";
}
function task(){
	return "除妖";
}
*/

/*
1 求出水仙花数
2 保存到数组中
3 求出最大值和最小值
4 按照从大到小排序
5 求和，求平均数
*/



//保存
var num=[];
for(var i=100;i<1000;i++){
	var a=i%10;
	var b=parseInt(i/100);
	var c=parseInt((i%100)/10);
	
	if(a*a*a+b*b*b+c*c*c==i){
		num[num.length]=i;	
	}
}
document.write(num+"<br/>");
document.write("最小值"+num[0]+"<br/>");
document.write("最大值"+num[num.length-1]+"<br/>");

for(var x=0;x<num.length-1;x++){
	for(var y=0;y<num.length-1-x;y++){
		if(num[y]<num[y+1]){
				var tem = 0;
				tem=num[y+1];
				num[y+1]=num[y];
				num[y]=tem;
				
		}
			
	}
}
document.write(num+"<br/>");
//数组遍历
var sum =0;
for(var j in num){
	sum += num[j];
}
document.write("sum="+sum+"<br/>");
document.write("avg="+(sum/num.length)+"<br/>");