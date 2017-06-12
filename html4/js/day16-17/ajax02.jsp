<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" 
    import="java.text.*"
    import="java.util.*" 
    import="com.mysql.jdbc.Connection"
    import="com.mysql.jdbc.*"
    import="java.sql.*"
    import="com.mysql.jdbc.PreparedStatement"
    import="com.test.*"
%>
<% 
     //多人聊天代码
	String driver = "com.mysql.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/chat";
	String username = "root";
	String password = "123";
	Connection conn = null;
	try {
	    Class.forName(driver); 
	    conn = (Connection) DriverManager.getConnection(url, username, password);
	} catch (ClassNotFoundException e) {
	    e.printStackTrace();
	} catch (SQLException e) {
	    e.printStackTrace();
	}
	
	if(conn!=null){
		String type = request.getParameter("type");
		//发送数据
		if("send".equals(type)){
			String sender =  request.getParameter("sender");
			String ip = request.getParameter("ip");
			String msg = request.getParameter("msg");
		    String sql = "insert into info(sender,ip,msg) values(?,?,?)";
		    PreparedStatement pstmt;
		    try {
		        pstmt = (PreparedStatement) conn.prepareStatement(sql);
		        pstmt.setString(1, sender);
		        pstmt.setString(2, ip);
		        pstmt.setString(3, msg);
		        pstmt.executeUpdate();
		        pstmt.close();
		        conn.close();
		    } catch (SQLException e) {
		        e.printStackTrace();
		    }
		//查询数据
		}else if("query".equals(type)){
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
		        pstmt.close();
		        conn.close();
		    } catch (SQLException e) {
		        e.printStackTrace();
		    }
		    String jsonStr =  com.alibaba.fastjson.JSON.toJSONString(chats);
			out.print(jsonStr);
      }
	}
%>
