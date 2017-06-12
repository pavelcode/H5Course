package com.test;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

public class WeiBoDB {
	
	
	private static Connection getConn() {
	    String driver = "com.mysql.jdbc.Driver";
	    String url = "jdbc:mysql://localhost:3306/chat";
	    String username = "root";
	    String password = "123";
	    Connection conn = null;
	    try {
	        Class.forName(driver); //classLoader,加载对应驱动
	        conn = (Connection) DriverManager.getConnection(url, username, password);
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return conn;
	}
	
	public static int insert(WeiBo weibo) {
	    Connection conn = getConn();
	    int i = 0;
	    String sql = "insert into weibo(content,comtcnt,likecnt,username)values(?,?,?,?)";
	    PreparedStatement pstmt;
	    try {
	        pstmt = (PreparedStatement) conn.prepareStatement(sql);
	        pstmt.setString(1, weibo.getContent());
	        pstmt.setInt(2, weibo.getComtcnt());
	        pstmt.setInt(3, weibo.getLikecnt());
	        pstmt.setString(4, weibo.getName());
	        i = pstmt.executeUpdate();
	        pstmt.close();
	        conn.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return i;
	}
	
	public static List<WeiBo> getAll() {
	    Connection conn = getConn();
	    String sql = "select * from weibo";
	    List<WeiBo> weiBos = new ArrayList<WeiBo>();
	    PreparedStatement pstmt;
	    try {
	        pstmt = (PreparedStatement)conn.prepareStatement(sql);
	        ResultSet rs = pstmt.executeQuery();
	        while (rs.next()) {
	        	int id = rs.getInt("id");
	        	String content = rs.getString("content");
	        	int comtcnt = rs.getInt("comtcnt");
	        	int likecnt = rs.getInt("likecnt");
	        	String name = rs.getString("username");
	        	
	        	WeiBo weiBo = new WeiBo(id,content,comtcnt,likecnt,name);
	        	weiBos.add(weiBo);
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return weiBos;
	}

}
