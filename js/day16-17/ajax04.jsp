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
       //分页实现
       String pageNo = request.getParameter("pageno");
		if(!"".equals(pageNo)&&pageNo!=null){
			  int pageValue = Integer.valueOf(pageNo);
			  int pageCount =5;
			  int start = pageValue*pageCount;
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
			        pstmt.close();
			        conn.close();
			    } catch (SQLException e) {
			        e.printStackTrace();
			    }
			 String jsonStr =  com.alibaba.fastjson.JSON.toJSONString(pagers);
			 response.getWriter().print(jsonStr);
		}
%>		