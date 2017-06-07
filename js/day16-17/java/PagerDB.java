package com.test;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

public class PagerDB {
	
	
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
	
	public static int insert(Pager pager) {
	    Connection conn = getConn();
	    int i = 0;
	    String sql = "insert into news(title) values(?)";
	    PreparedStatement pstmt;
	    try {
	        pstmt = (PreparedStatement) conn.prepareStatement(sql);
	        pstmt.setString(1, pager.getTitle());
	        i = pstmt.executeUpdate();
	        pstmt.close();
	        conn.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return i;
	}
	
	
	public static List<Pager> getPage(int page) {
	    Connection conn = getConn();
	    int pageCount =5;//每页的条数
	    int start = page*pageCount;
	    String sql = "select title from news limit "+start+","+pageCount;
	   // System.out.println(sql);
	    List<Pager> pagers = new ArrayList<Pager>();
	    PreparedStatement pstmt;
	    try {
	        pstmt = (PreparedStatement)conn.prepareStatement(sql);
	        ResultSet rs = pstmt.executeQuery();
	        while (rs.next()) {
	        	//int id = rs.getInt("id");
	        	String title = rs.getString("title");
	        	Pager pager = new Pager(title);
	        	pagers.add(pager);
	        	
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return pagers;
	}

}
