/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsonbuilders;

import entity.User;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import util.RoleManager;

/**
 *
 * @author Melnikov
 */
public class UserJsonBuilder {
    public String createJsonUser(User user) throws IOException{
      String userJson=null;
      RoleManager rm = new RoleManager();
      ReaderJsonBuilder readerJsonBuilder = new ReaderJsonBuilder();
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", user.getId())
          .add("login", user.getLogin())
          .add("role", rm.getTopRoleName(user))
          .add("reader", readerJsonBuilder.createJsonReader(user.getReader()));
          String jserJson=null;
          try (Writer writer = new StringWriter()){
              Json.createWriter(writer).write(job.build());
              userJson = writer.toString();
          }
        return userJson;
    }
    public JsonObject createJsonObjectUser(User user) throws IOException{
      String userJson=null;
      RoleManager rm = new RoleManager();
      ReaderJsonBuilder readerJsonBuilder = new ReaderJsonBuilder();
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", user.getId())
          .add("login", user.getLogin())
          .add("role", rm.getTopRoleName(user))
          .add("reader", readerJsonBuilder.createJsonReader(user.getReader()));
          
        return job.build();
    }
}
