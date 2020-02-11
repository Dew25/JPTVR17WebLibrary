/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsonbuilders;

import entity.Reader;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

/**
 *
 * @author Melnikov
 */
public class ReaderJsonBuilder {
    public JsonObject createJsonReader(Reader reader){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", reader.getId())
          .add("name", reader.getName())
          .add("surname", reader.getSurname())
          .add("phone", reader.getPhone())
          .add("money", reader.getMoney());
        return job.build();
    }
}
