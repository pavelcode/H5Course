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
       //微博加载
       String type = request.getParameter("type");
		if("insert".equals(type)){
			 String sql = "insert into weibo(content,comtcnt,likecnt,username)values(?,?,?,?)";
			    PreparedStatement pstmt;
			    try {
			        pstmt = (PreparedStatement) conn.prepareStatement(sql);
			        pstmt.setString(1, request.getParameter("content"));
			        pstmt.setInt(2,Integer.valueOf(request.getParameter("comtcnt")));
			        pstmt.setInt(3,Integer.valueOf(request.getParameter("likecnt")));
			        pstmt.setString(4,request.getParameter("name"));
			       pstmt.executeUpdate();
			        pstmt.close();
			        conn.close();
			    } catch (SQLException e) {
			        e.printStackTrace();
			    }
		}else{
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
			     pstmt.close();
			     conn.close();
			  } catch (SQLException e) {
			    e.printStackTrace();
			  }
			
			 String jsonStr =  com.alibaba.fastjson.JSON.toJSONString(weiBos);
			 response.getWriter().print(jsonStr);
		}
		
%>		