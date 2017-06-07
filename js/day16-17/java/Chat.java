package com.test;

public class Chat {

	public Chat(String sender, String msg, String ip) {
		super();
		this.sender = sender;
		this.msg = msg;
		this.ip = ip;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String sender;
	public String msg;
	public String ip;
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Chat() {
		
	}
	public Chat(String msg, String ip) {
		super();
		this.msg = msg;
		this.ip = ip;
	}
	@Override
	public String toString() {
		return "Chat [msg=" + msg + ", ip=" + ip + "]";
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	
}
