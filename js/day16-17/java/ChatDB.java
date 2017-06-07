smpackage com.test;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

public class ChatDB {
	
	
	private static Connection getConn() {
	    String driver = "com.mysql.jdbc.Driver";
	    String url = "jdbc:mysql://localhost:3306/chat";
	    String username = "root";
	    String password = "123";
	    Connection conn = null;
	    try {
	        Class.forName(driver); //classLoader,���ض�Ӧ��
	        conn = (Connection) DriverManager.getConnection(url, username, password);
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return conn;
	}
	
	public static int insert(Chat chat) {
	    Connection conn = getConn();
	    int i = 0;
	    String sql = "insert into info(sender,ip,msg) values(?,?,?)";
	    PreparedStatement pstmt;
	    try {
	        pstmt = (PreparedStatement) conn.prepareStatement(sql);
	        pstmt.setString(1, chat.getSender());
	        pstmt.setString(2, chat.getIp());
	        pstmt.setString(3, chat.getMsg());
	        i = pstmt.executeUpdate();
	        pstmt.close();
	        conn.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return i;
	}
	
	public static List<Chat> getAll() {
	    Connection conn = getConn();
	    String sql = "select * from info";
	    List<Chat> chats = new ArrayList<Chat>();
	    PreparedStatement pstmt;
	    try {
	        pstmt = (PreparedStatement)conn.prepareStatement(sql);
	        ResultSet rs = pstmt.executeQuery();
	        while (rs.next()) {
	        	//int id = rs.getInt("id");
	        	String ip = rs.getString("ip");
	        	String msg = rs.getString("msg");
	        	String sender = rs.getString("sender");
	        	Chat chat = new Chat(sender,ip,msg);
	        	chats.add(chat);
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return chats;
	}

}
