<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

  <div class="row">
    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Добавить книгу</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="name">Название</label>
            <input type="text" class="form-control" id="name" placeholder="" value="" required>
            <div class="invalid-feedback">
              Название должно быть заполнено.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="author">Автор книги</label>
            <input type="text" class="form-control" id="author" placeholder="" value="" required>
            <div class="invalid-feedback">
              Имя автора должно быть заполнено.
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="isbn">ISBN</label>
            <input type="text" class="form-control" id="isbn" placeholder="isbn" required>
            <div class="invalid-feedback" style="width: 100%;">
              Это поле должно быть заполнено!
            </div>
        </div>

        <div class="mb-3">
          <label for="publishedYear">Год издания книги</label>
          <input type="text" class="form-control" id="publishedYear" placeholder="год издания">
          <div class="invalid-feedback">
            Это поле должно быть заполнено!
          </div>
        </div>

        <div class="mb-3">
          <label for="countInLibrary">Количество экземпляров</label>
          <input type="text" class="form-control" id="countInLibrary" placeholder="Сколько экземпляров" required>
          <div class="invalid-feedback">
            Это поле должно быть заполнено!
          </div>
        </div>

        <div class="mb-3">
          <label for="price">Цена книги</label>
          <input type="text" class="form-control" id="price" placeholder="Цена книги">
        </div>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="button">Добавить книгу</button>
      </form>
    </div>
  </div>


