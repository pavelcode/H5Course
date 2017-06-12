<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.*" import="java.text.*"%>

<%String datetime=new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(Calendar.getInstance().getTime());
	out.print(datetime); %>

<%
  String name = request.getParameter("name");
  //out.println("服务端获得的名字"+name);
  if("zhangsan".equals(name)||"doudou".equals(name)){
	  out.println("ok");
  }else{
	  out.println("error");
  }
%>

