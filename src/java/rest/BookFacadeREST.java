/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import entity.Book;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.naming.Context;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author jvm
 */
@Stateless
@Path("entity.book")
@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
public class BookFacadeREST extends AbstractFacade<Book> {

  @PersistenceContext(unitName = "JPTVR17WebLibraryPU")
  private EntityManager em;
  
  private Context context;
  
  public BookFacadeREST() {
    super(Book.class);
  }

  @POST
  @Override
  @Consumes({MediaType.APPLICATION_JSON})
  
  public void create(Book entity) {
    super.create(entity);
  }

  @PUT
  @Path("{id}")
  @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
  public void edit(@PathParam("id") Long id, Book entity) {
    super.edit(entity);
  }

  @DELETE
  @Path("{id}")
  public void remove(@PathParam("id") Long id) {
    super.remove(super.find(id));
  }

  @GET
  @Path("{id}")
  @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
  public Book find(@PathParam("id") Long id) {
    return super.find(id);
  }

  @GET
  
  @Produces({MediaType.APPLICATION_JSON})
  public List<Book> findAll() {
    List<Book> books = null;
    books = super.findAll();
    return books;
  }

  @GET
  @Path("{from}/{to}")
  @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
  public List<Book> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
    return super.findRange(new int[]{from, to});
  }

  @GET
  @Path("count")
  @Produces(MediaType.TEXT_PLAIN)
  public String countREST() {
    return String.valueOf(super.count());
  }

  @Override
  protected EntityManager getEntityManager() {
    return em;
  }
  
}
