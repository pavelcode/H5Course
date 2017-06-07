package com.test;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PagerServlet
 */
@WebServlet("/PagerServlet")
public class PagerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	static int count=0;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PagerServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String pageNo = request.getParameter("pageno");
		if(!"".equals(pageNo)&&pageNo!=null){
			int page = Integer.valueOf(pageNo);
			List<Pager> pagers = PagerDB.getPage(page);
			 String jsonStr =  com.alibaba.fastjson.JSON.toJSONString(pagers);
			 response.getWriter().print(jsonStr);
		}else{
			for(int i=0;i<10;i++){
				Pager pager = new Pager("title"+(++count));
				PagerDB.insert(pager);
			}
			
		}
		
		
	}

}
