
import {httpModule} from './HttpModule.js';
import {bookModule} from './BookModule.js';

class ReaderModule{
  listReaders(){
    httpModule.http({url:'listReadersJson',options:{method:'GET'}})
      .then(function(response) {  
        if(response.authStatus === "true"){
          let data = response.dataJson;
          let cards = '<div class="w-100 d-flex justify-content-center">';
          for(let i=0;i<data.length;i++){
            cards +=  
             `<div class="card border-primary m-3" style="max-width: 30rem;">
                <div class="card-header">${data[i].name} ${data[i].surname}</div>
                <div class="card-body">
                  <h4 class="card-title">Телефон: ${data[i].phone}</h4>
                  <p class="card-text">Кошелек с деньгами: ${data[i].money}</p>
                </div>
              </div>`;
          }
          cards +='</div>';
          document.getElementById('content').innerHTML = cards;
        }else{
          bookModule.listBooks();
          document.getElementById("info").innerHTML="У вас нет прав. Войдите!"
        }
        console.log('Request succeeded with JSON response', response);  
      })
      .catch(function(error) {  
        console.log('Request failed', error);  
      });
  }

  printListReaders(data){
    let cards = '<div class="w-100 d-flex justify-content-center">';
    for(let i=0;i<data.length;i++){
      cards +=  
       `<div class="card border-primary m-3" style="max-width: 30rem;">
          <div class="card-header">${data[i].name} ${data[i].surname}</div>
          <div class="card-body">
            <h4 class="card-title">Телефон: ${data[i].phone}</h4>
            <p class="card-text">Кошелек с деньгами: ${data[i].money}</p>
          </div>
        </div>`;;
    }
    cards +='</div>';
    document.getElementById('content').innerHTML = cards;
  }
  printNewReaderForm(){
   document.getElementById('content').innerHTML=
        `<div class="w-100 d-flex justify-content-center">
            <div class="card w-50">
                <div class="card-body">
                  <h5 class="card-title w-100 text-center">Зарегистрировать пользователя</h5>
                  <p class="card-text d-flex justify-content-end">Имя пользователя: <input class="w-50 ml-3" type="text" id="name"></p>
                  <p class="card-text d-flex justify-content-end">Фамилия пользователя: <input class="w-50 ml-3" type="text" id="surname"></p>
                  <p class="card-text d-flex justify-content-end">Телефон пользователя: <input class="w-50 ml-3" type="text" id="phone"></p>
                  <p class="card-text d-flex justify-content-end">Количество денег в кошельке: <input class="w-50 ml-3" type="text" id="money"></p>
                  <p class="card-text d-flex justify-content-end">Логин: <input class="w-50 ml-3" type="text" id="login"></p>
                  <p class="card-text d-flex justify-content-end">Пароль: <input class="w-50 ml-3" type="text" id="password"></p>
                  <a href="#" id="btnAddUser" class="btn btn-primary w-100">Зарегистрировать пользователя</a>
                </div>
            </div>
          </div>`;
    document.getElementById('btnAddUser').onclick=function(){
        readerModule.createUser();
    }
  }
  createUser(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let phone = document.getElementById('phone').value;
    let money = document.getElementById('money').value;
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let user = {
        "name": name,
        "surname": surname,
        "phone": phone,
        "money": money,
        "login": login,
        "password": password,
        
    }
    httpModule.http({url:'createReaderJson',options:{method:'POST',data:user}})
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
}
let readerModule = new ReaderModule();
export {readerModule};
