import {httpModule} from './HttpModule.js';

class Book{
  listBooks(){
//    httpModule.http({url:'listNewBooks',options:{method:'GET'}})
    httpModule.http({url:'listNewBooks',options:{method:'GET'}})
            .then(function(response) {
              console.log(response.dataJson);
              let data = response.dataJson;
            //  let data = response;
              let cards = '<div class="w-100 d-flex justify-content-center">';
              for(let i= 0; i< data.length;i++){
                cards +=
                        `<div class="card border-primary m-3" style="max-width: 10rem;">
                            <div class="card-header">${data[i].name}</div>
                            <div class="card-body">
                              <h4 class="card-title">${data[i].author}</h4>
                              <p class="card-text">${data[i].publishedYear}</p>
                            </div>
                          </div>`;//card(data);
              };
              cards += '</div>';
              document.getElementById('content').innerHTML = cards;
              console.log('Request succeeded with JSON response', response);  
            })
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
      
     httpModule.http({url:'createBookJson',options:{method:'POST',data:book}})
            .then(function(response) {
              console.log(response);
              if(response.dataJson !== null){
                document.getElementById('info').innerHTML = 'Книга добавлена';
              }else{
                document.getElementById('info').innerHTML = 'Книгу добавить не удалось'; 
              }    
              bookModule.listBooks();//this === undefined в модуле
              console.log('Request succeeded with JSON response', response);  
            });

  }
  
  printNewBookForm(validFunc){
    let htmlAddBook = `<div class="row d-flex justify-content-center">
                        <div class="col-md-8 order-md-1">
                          <h4 class="mb-3">Добавить книгу</h4>
                          <form class="needs-validation" novalidate>
                            
                            <div class="mb-3">
                              <label for="name">Название</label>
                              <input type="text" class="form-control" id="name" placeholder="" value="" required>
                              <div class="invalid-feedback">
                                Название должно быть заполнено.
                              </div>
                            </div>
                            <div class="mb-3">
                              <label for="author">Автор книги</label>
                              <input type="text" class="form-control" id="author" placeholder="" value="" required>
                              <div class="invalid-feedback">
                                Имя автора должно быть заполнено.
                              </div>
                            </div>
                            
                            <div class="mb-3">
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

