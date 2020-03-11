import {httpModule} from './HttpModule.js';
import {authModule} from './AuthModule.js';

class Book{
  buyBook(bookId){
    let url = 'getBookJson';
    let param = 'bookId='+bookId;
     httpModule.http({url:url,options:{method:'GET',params: param}})
     .then(function(response) {
              console.log(response);
              let data = response;
              let content = document.getElementById('content');
              content.insertAdjacentHTML('afterbegin',
                        `<div class="row w-100 d-flex justify-content-center" id="listBooksDiv"></div>
                          <div class="card border-primary m-3" style="width: 10em;">
                            <div class="card-header">${data.name}</div>
                            <div class="card-body">
                              <h4 class="card-title">${data.author}</h4>
                              <p class="card-text">${data.publishedYear}</p>
                            </div>
                          </div>
                        </div>`);
            });
  }
  listBooks(){
    httpModule.http({url:'rest/entity.book',options:{method:'GET'}})
            .then(function(response) {
              console.log(response);
              let data = response;
            //  let data = response;
              let content = document.getElementById('content');
              content.insertAdjacentHTML('afterbegin','<div class="row w-100 d-flex justify-content-center" id="listBooksDiv"></div>');
              let div = document.getElementById('listBooksDiv');
              for(let i= 0; i< data.length;i++){
                div.insertAdjacentHTML('beforeend',
                        `<div class="card border-primary m-3" style="width: 10em;">
                            <div class="card-header">${data[i].name}</div>
                            <div class="card-body">
                              <h4 class="card-title">${data[i].author}</h4>
                              <p class="card-text">${data[i].publishedYear}</p>
                            </div>
                            <button type="button" id="btnBuyBook${i}" >Купить книгу</button>
                          </div>`);//card(data);
                let btnBuyBook = document.getElementById("btnBuyBook"+i);
                btnBuyBook.onclick = function(){
                  bookModule.buyBook(data[i].id);
                };
              };
              //document.getElementById('content').innerHTML += '</div>';
              //document.getElementById('content').innerHTML = cards;
              console.log('Request succeeded with JSON response', response);  
            });
  }
  
  createBook(){
      let name = document.getElementById('name').value;
      let author = document.getElementById('author').value;
      let isbn = document.getElementById('isbn').value;
      let publishedYear = document.getElementById('publishedYear').value;
      let countInLibrary = document.getElementById('countInLibrary').value;
      let price = document.getElementById('price').value;
      let book={
          "name": name,
          "author": author,
          "isbn": isbn,
          "publishedYear": publishedYear,
          "countInLibrary": countInLibrary,
          "price": price,
      }
      
     httpModule.http({url:'rest/entity.book',options:{method:'POST',data:book}})
            .then(function(response) {
              console.log(response);
              if(response === undefined){
                document.getElementById('info').innerHTML = 'Книга добавлена';
                bookModule.listBooks();//this === undefined в модуле
              }else{
                document.getElementById('info').innerHTML = 'Книгу добавить не удалось'; 
                if(response.authStatus === 'false'){
                  authModule.printLoginForm();
                }else{
                  bookModule.listBooks();
                }
              }    
              console.log('Request succeeded with JSON response', response);  
            });

  }
  
  printNewBookForm(validFunc){
    let htmlAddBook = `<div class="row d-flex justify-content-center">
                        <div class="col-md-8 order-md-1">
                          <h4 class="mb-3">Добавить книгу</h4>
                          <form class="needs-validation" novalidate>
                            
                            <div class="mb-3 w-50">
                              <label for="name">Название</label>
                              <input type="text" class="form-control" id="name" placeholder="" value="" required>
                              <div class="invalid-feedback">
                                Название должно быть заполнено.
                              </div>
                            </div>
                            <div class="mb-3 w-50">
                              <label for="author">Автор книги</label>
                              <input type="text" class="form-control" id="author" placeholder="" value="" required>
                              <div class="invalid-feedback">
                                Имя автора должно быть заполнено.
                              </div>
                            </div>
                            
                            <div class="mb-3 w-50">
                              <label for="isbn">ISBN</label>
                                <input type="text" class="form-control" id="isbn" placeholder="isbn" required>
                                <div class="invalid-feedback" style="width: 100%;">
                                  Это поле должно быть заполнено!
                                </div>
                            </div>
                            <div class="row">
                              <div class="col-md-4 mb-3">
                                <label for="publishedYear">Год издания книги</label>
                                <input type="text" class="form-control" id="publishedYear" placeholder="год издания">
                                <div class="invalid-feedback">
                                  Это поле должно быть заполнено!
                                </div>
                              </div>

                              <div class="col-md-4 mb-3">
                                <label for="countInLibrary">Количество экземпляров</label>
                                <input type="text" class="form-control" id="countInLibrary" placeholder="Сколько экземпляров" required>
                                <div class="invalid-feedback">
                                  Это поле должно быть заполнено!
                                </div>
                              </div>

                              <div class="col-md-4 mb-3">
                                <label for="price">Цена книги</label>
                                <input type="text" class="form-control" id="price" placeholder="Цена книги">
                              </div>
                            </div>
                            <hr class="mb-4">
                            <button class="btn btn-primary btn-lg btn-block" id="btnAddBook" type="button">Добавить книгу</button>
                          </form>
                        </div>
                      </div>`;
    document.getElementById('content').innerHTML = htmlAddBook;
    document.getElementById('btnAddBook').addEventListener('click', this.createBook);
    
  }

}
const bookModule = new Book();
export {bookModule};

