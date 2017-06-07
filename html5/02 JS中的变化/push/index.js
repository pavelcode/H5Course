var serverstatus ;
var serverdata;
var serverurl="";

window.onload = function(){
	serverstatus = document.getElementById("serverstatus");
	serverdata = document.getElementById("serverdata");	
	listenServer();
}
function listenServer(){
	serverstatus.innerHTML="start conn...";
	var eventsource = new EventSource(serverurl);
	//也可以添加一个监听
	//参数1：服务端的标识
	eventsource.addEventListener("flag",eventlistener);
	
	eventsource.onopen=onopen;
	eventsource.onerror =onerror;
	eventsource.onmessage=onmessage;
}

function onopen(e){
	  serverstatus.innerHTML="open server";
}
function onerror(e){
	 serverstatus.innerHTML="error";
}
function onmessage(e){
	serverdata.innerHTML = e.data;
}
function eventlistener(e){
	serverdata.innerHTML = e.data;
}

