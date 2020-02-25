import {httpModule} from './HttpModule.js';

class Book{
  card=function(data){ 
      return `<div class="card border-primary m-3" style="max-width: 10rem;">
          <div class="card-header">${data[i].name}</div>
          <div class="card-body">
            <h4 class="card-title">${data[i].author}</h4>
            <p class="card-text">${data[i].publishedYear}</p>
          </div>
        </div>`;
  }
  
  listBooks=function(){
    httpModule.http({url:'listNewBooks',options:{method:'GET'}})
            .then(function(response) {  
              //printListNewBooks(response.dataJson);
                console.log(response.dataJson);
              //let data = JSON.parse(dataJson);
              let data = response.dataJson;
              let cards = '<div class="w-100 d-flex justify-content-center">';
              for(let i= 0; i< data.length;i++){
                cards += `<div class="card border-primary m-3" style="max-width: 10rem;">
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
  
  printListNewBooks(dataJson){
    console.log(dataJson);
    //let data = JSON.parse(dataJson);
    let data = dataJson;
    let cards = '<div class="w-100 d-flex justify-content-center">';
    for(let i= 0; i< data.length;i++){
      cards += this.card(data);
    };
    cards += '</div>';
    document.getElementById('content').innerHTML = cards;

  }
  createBook(){
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    let publishedYear = document.getElementById('publishedYear').value;
    let countInLibrary = document.getElementById('countInLibrary').value;
    let price = document.getElementById('price').value;
    let newBook = {
      "name": name,
      "author": author,
      "isbn": isbn,
      "publishedYear": publishedYear,
      "countInLibrary": countInLibrary,
      "price": price
    }
    httpModule.http({url:'newBookJson', 
            options:{method:'POST',data:newBook}
          }).then(function(response) { 
              if(response.authStatus === 'true'){
                localStorage.setItem('token',response.token);
                localStorage.setItem('user',response.user);
                document.getElementById('info').innerHTML = 'Добавлена книга';
                bookModule.listBooks();
              }else{
                document.getElementById('info').innerHTML = 'У вас нет прав. Авторизуйтесь!';
                this.printNewBookForm(newBook);
              }
              console.log('Request succeeded with JSON response', response);  
            })
  }
  printNewBookForm(newBook){
    
    let cardNewBook = 
    `<div class="card" style="width: 50rem;">
        <div class="card-body">
          <h5 class="card-title">Добавление книги</h5>
          <p class="card-text">
              <form onsubmit="false">
                <div class="form-group">
                      <label for="name">Название книги</label>
                      <input type="text" class="form-control" id="name" aria-describedby="Название книги" value="">
                      <small id="name-error" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                      <label for="author">Автор книги</label>
                      <input type="text" class="form-control" id="author" aria-describedby="Автор книги"  value="">
                      <small id="author-error" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                      <label for="isbn">ISBN</label>
                      <input type="text" class="form-control" id="isbn" aria-describedby="ISBN" value="">
                      <small id="isbn-error" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                      <label for="publishedYear">Год издания</label>
                      <input type="text" class="form-control" id="publishedYear" aria-describedby="Год издания" value="">
                      <small id="publishedYear-error" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                      <label for="countInLibrary">Количество экземпляров</label>
                      <input type="text" class="form-control" id="countInLibrary" aria-describedby="Количество экземпляров" value="">
                      <small id="countInLibrary-error" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                      <label for="price">Цена</label>
                      <input type="text" class="form-control" id="price" aria-describedby="Цена" value="">
                      <small id="price-error" class="form-text text-muted"></small>
                </div>

                <button type="submit" id="btnAddBook" class="btn btn-primary">Добавить книгу</button>
              </form>
            </p>
        </div>
    </div>`;
    document.getElementById('content').innerHTML = cardNewBook;
    document.getElementById('btnAddBook').addEventListener('click',this.createBook);
  
  }
  
  

}
let bookModule = new Book();
export {bookModule};

