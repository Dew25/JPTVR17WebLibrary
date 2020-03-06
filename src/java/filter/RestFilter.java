package filter;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import entity.User;
import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Response;

/**
 *
 * @author jvm
 */
@WebFilter(filterName = "RestFilter", urlPatterns = {"/rest/*"})
public class RestFilter implements Filter {
  
  private static final boolean debug = true;

  // The filter configuration object we are associated with.  If
  // this value is null, this filter instance is not currently
  // configured. 
  private FilterConfig filterConfig = null;
  
  public RestFilter() {
  }  
  
 
  /**
   *
   * @param request The servlet request we are processing
   * @param response The servlet response we are creating
   * @param chain The filter chain we are processing
   *
   * @exception IOException if an input/output error occurs
   * @exception ServletException if a servlet error occurs
   */
  public void doFilter(ServletRequest request, ServletResponse response,
          FilterChain chain)
          throws IOException, ServletException {
    HttpSession session = null;
    HttpServletRequest req = (HttpServletRequest) request;
    String path = req.getServletPath();
    String method = req.getMethod().toUpperCase();
    if(path.equals("/rest")){
      path = req.getPathInfo();
      if("/index.html".equals(path)|| "/loginJson".equals(path)){
        chain.doFilter(request, response);
        return;
      }
      if("/entity.book".equals(path)
              && "GET".equals(method)){
        chain.doFilter(request, response);
      }
      if(method.equals("POST")){
        session = req.getSession(false);
        if(session == null){
//          Response.ok("{\"authStatus\":\"false\"}").build();
//          return;
          try (PrintWriter out = response.getWriter()) {
            out.println("{\"authStatus\":\"false\"}");  
            out.flush();
            
          }
        }
        User user = (User) session.getAttribute("user");
        if(user == null){
//          Response.ok("{\"authStatus\":\"false\"}").build();
//          return;
          try (PrintWriter out = response.getWriter()) {
            out.println("{\"authStatus\":\"false\"}");  
            out.flush();
            return;
          }
        }
        chain.doFilter(request, response);
      }
    }

    //chain.doFilter(request, response);
  }
 
  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
  }

  @Override
  public void destroy() {
  }


  
}
