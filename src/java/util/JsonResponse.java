/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package util;

import entity.User;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.servlet.http.HttpSession;
import jsonbuilders.UserJsonBuilder;

/**
 *
 * @author jvm
 */
public class JsonResponse { 
  public String getJsonResponse(HttpSession session) throws IOException{
    String authStatus = "false";
    String token = "null";
    String userJson = "null";
    String json = null;
    JsonObjectBuilder job = Json.createObjectBuilder();
    if(session != null){//обычно есть
      UserJsonBuilder ujb = new UserJsonBuilder();
      User user = null;
      try {//если нажата логоут будет исключение
        user = (User)session.getAttribute("user");
      } catch (Exception e) {
        user = null;
      }
      if(user != null){
        token = session.getId();
        authStatus = "true";
        job.add("authStatus", authStatus) // true
          .add("token", token) // есть
          .add("user", ujb.createJsonObjectUser(user)) // есть
          .add("dataJson", "null");// нет даты
      }else{ // user нет
        job.add("authStatus", authStatus) // false
         .add("token", "null") // "null"
         .add("user", "null")// "null"
         .add("dataJson", "null");
      }
    }else{ // сессии нет (?)
      job.add("authStatus", "false")
       .add("token", "null")
       .add("user", "null")
       .add("dataJson", "null");
    }
    try (Writer writer = new StringWriter()){
      Json.createWriter(writer).write(job.build());
      json = writer.toString();
    }
    return json;
  }
  public String getJsonResponse(HttpSession session, String actionStatus) throws IOException{
    String authStatus = "false";
    String token = "null";
    String userJson = "null";
    String json = null;
    JsonObjectBuilder job = Json.createObjectBuilder();
    if(session != null){//обычно есть
      UserJsonBuilder ujb = new UserJsonBuilder();
      User user = null;
      try {//если нажата логоут будет исключение
        user = (User)session.getAttribute("user");
      } catch (Exception e) {
        user = null;
      }
      if(user != null){
        token = session.getId();
        authStatus = "true";
        job.add("authStatus", authStatus) // true
          .add("token", token) // есть
          .add("user", ujb.createJsonObjectUser(user)) // есть
          .add("dataJson", "null")// нет даты
          .add("actionStatus", actionStatus);
      }else{ // user нет
        job.add("authStatus", authStatus) // false
         .add("token", "null") // "null"
         .add("user", "null")// "null"
         .add("dataJson", "null")
         .add("actionStatus", actionStatus);
      }
    }else{ // сессии нет (?)
      job.add("authStatus", "false")
       .add("token", "null")
       .add("user", "null")
       .add("dataJson", "null")
       .add("actionStatus", actionStatus);
    }
    try (Writer writer = new StringWriter()){
      Json.createWriter(writer).write(job.build());
      json = writer.toString();
    }
    return json;
  }

  public String getJsonResponse(HttpSession session, JsonArray dataJson) throws IOException{
    String authStatus = "false";
    String token = "null";
    String userJson = "null";
    String json = null;
    JsonObjectBuilder job = Json.createObjectBuilder();
    if(session != null){
      UserJsonBuilder ujb = new UserJsonBuilder();
      User user = (User)session.getAttribute("user");
      if(user != null){// есть 
        job.add("authStatus", "true")
         .add("token", session.getId())
         .add("user", ujb.createJsonObjectUser(user))
         .add("dataJson", dataJson);
      }else{ //user нет
        job.add("authStatus", "false")
         .add("token", "null")
         .add("user", "null")
         .add("dataJson", "null");
      }  
    }else{
      job.add("authStatus", "false")
         .add("token", "null")
         .add("user", "null")
         .add("dataJson", "null");
    }
    try (Writer writer = new StringWriter()){
      Json.createWriter(writer).write(job.build());
      json = writer.toString();
    }
    return json;
  }
  public String getJsonResponse(HttpSession session, JsonObject dataJson) throws IOException{
    String authStatus = "false";
    String token = "null";
    String userJson = "null";
    String json = null;
    JsonObjectBuilder job = Json.createObjectBuilder();
    if(session != null){
      UserJsonBuilder ujb = new UserJsonBuilder();
      User user = (User)session.getAttribute("user");
      if(user != null){// есть 
        job.add("authStatus", "true")
         .add("token", session.getId())
         .add("user", ujb.createJsonObjectUser(user))
         .add("dataJson", dataJson);
      }else{ //user нет
        job.add("authStatus", "false")
         .add("token", "null")
         .add("user", "null")
         .add("dataJson", "null");
      }  
    }else{
      job.add("authStatus", "false")
         .add("token", "null")
         .add("user", "null")
         .add("dataJson", "null");
    }
    try (Writer writer = new StringWriter()){
      Json.createWriter(writer).write(job.build());
      json = writer.toString();
    }
    return json;
  }
  public String getJsonResponse(HttpSession session, JsonArray dataJson, boolean isAuth) throws IOException{
    String authStatus = "false";
    String token = "null";
    String userJson = "null";
    String json = null;
    JsonObjectBuilder job = Json.createObjectBuilder();
    if(session != null){
      UserJsonBuilder ujb = new UserJsonBuilder();
      User user = (User)session.getAttribute("user");
      if(user != null){// есть 
        job.add("authStatus", "true")
         .add("token", session.getId())
         .add("user", ujb.createJsonObjectUser(user))
         .add("dataJson", dataJson);
      }else{ //user нет
        if(isAuth){
          job.add("authStatus", "false")
           .add("token", "null")
           .add("user", "null")
           .add("dataJson", "null");
        }else{
          job.add("authStatus", "false")
           .add("token", "null")
           .add("user", "null")
           .add("dataJson", dataJson);
        }
      }  
    }else{
      job.add("authStatus", "false")
         .add("token", "null")
         .add("user", "null")
         .add("dataJson", "null");
    }
    try (Writer writer = new StringWriter()){
      Json.createWriter(writer).write(job.build());
      json = writer.toString();
    }
    return json;
  }
  public String getJsonResponse(HttpSession session, JsonObject dataJson, boolean isAuth) throws IOException{
    String authStatus = "false";
    String token = "null";
    String userJson = "null";
    String json = null;
    JsonObjectBuilder job = Json.createObjectBuilder();
    if(session != null){
      UserJsonBuilder ujb = new UserJsonBuilder();
      User user = (User)session.getAttribute("user");
      if(user != null){// есть 
        job.add("authStatus", "true")
         .add("token", session.getId())
         .add("user", ujb.createJsonObjectUser(user))
         .add("dataJson", dataJson);
      }else{ //user нет
        if(isAuth){
          job.add("authStatus", "false")
           .add("token", "null")
           .add("user", "null")
           .add("dataJson", "null");
        }else{
          job.add("authStatus", "false")
           .add("token", "null")
           .add("user", "null")
           .add("dataJson", dataJson);
        }
      }  
    }else{
      job.add("authStatus", "false")
         .add("token", "null")
         .add("user", "null")
         .add("dataJson", "null");
    }
    try (Writer writer = new StringWriter()){
      Json.createWriter(writer).write(job.build());
      json = writer.toString();
    }
    return json;
  }
  
}
