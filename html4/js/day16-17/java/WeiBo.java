package com.test;

public class WeiBo {

	int id;
	String content;
	int comtcnt;
	public WeiBo() {
		super();
	}
	public WeiBo(int id, String content, int comtcnt, int likecnt, String name) {
		super();
		this.id = id;
		this.content = content;
		this.comtcnt = comtcnt;
		this.likecnt = likecnt;
		this.name = name;
	}
	int likecnt;
	String name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getComtcnt() {
		return comtcnt;
	}
	public void setComtcnt(int comtcnt) {
		this.comtcnt = comtcnt;
	}
	public int getLikecnt() {
		return likecnt;
	}
	public void setLikecnt(int likecnt) {
		this.likecnt = likecnt;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
