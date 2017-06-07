n
var num =0;
function count(){
	//把消息传递给前台
	postMessage(num);
	num++;
	//每个1s执行一次
	setTimeout(count,1000);
}
count();