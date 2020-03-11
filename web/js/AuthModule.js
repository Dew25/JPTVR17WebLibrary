import {httpModule} from './HttpModule.js';
import {bookModule } from './BookModule.js';
import {readerModule} from './ReaderModule.js';

//export {printLoginForm,systemOutput};


class AuthModule{
  printLoginForm(){
    document.getElementById('content').innerHTML = `<div class="w-100 d-flex justify-content-center">
               <div class="card border-primary p-2" style="max-width: 30rem;">
                  <div class="card-header text-center">Введите логин и пароль</div>
                  <div class="card-body">
                    <p class="card-text d-flex justify-content-between">Логин: <input class="ml-2" type="text" id="login"></p>
                    <p class="card-text d-flex justify-content-between">Пароль: <input class="ml-2" type="text" id="password"></p>
                    <p class="card-text"><button class="btn btn-light w-100" type="button" id="btnEnter">Войти</button</p>
                  </div>
    <p class="text-center">Нет учетной записи? <a id="registration" href="#">Зарегистрироваться</a></p>
                </div>
             </div>`;//cards;
    document.getElementById('registration').addEventListener('click',readerModule.printNewReaderForm);
    document.getElementById('btnEnter').onclick = function(){
      
      let login = document.getElementById('login').value;
      let password = document.getElementById('password').value;
      let credentials = {
        'login': login,
        'password': password
      };
      httpModule.http({url:'loginJson', 
            options:{method:'POST',data:credentials}
          }).then(function(response) { 
              if(response.authStatus === 'true'){
                localStorage.setItem('token',response.token);
                localStorage.setItem('user',JSON.stringify(response.user));
                document.getElementById('info').innerHTML = 'Вы вошли как '+response.user.login;
                document.getElementById('showLogin').style.display = 'none';
                document.getElementById('sysout').style.display = 'block';
                document.getElementById('listReaders').style.display = 'block';
                document.getElementById('newBook').style.display = 'block';
                
              }else{
                document.getElementById('info').innerHTML = 'Войти не удалось';
                authModule.printLoginForm();
                document.getElementById('showLogin').style.display = 'block';
                document.getElementById('sysout').style.display = 'none';
                document.getElementById('listReaders').style.display = 'none';
                //document.getElementById('newBook').style.display = 'none';
              }
              bookModule.listBooks();
              console.log('Request succeeded with JSON response', response);  
            })
    } 
    
  }

  systemOutput(){
      httpModule.http({url:'logoutJson',
            options:{method:'GET'}
          })
            .then(function(response) { 
              if('false'===response.authStatus){
                if(localStorage.getItem('token')!== null){
                  localStorage.removeItem('token');
                }
                if(localStorage.getItem('user')!== null){
                  localStorage.removeItem('user');
                }
                document.getElementById('showLogin').style.display = 'block';
                document.getElementById('sysout').style.display = 'none';
                document.getElementById('listReaders').style.display = 'none';
                document.getElementById('newBook').style.display = 'none';
                document.getElementById('info').innerHTML = 'Вы вышли';
                bookModule.listBooks();
              }
              console.log('Request succeeded with JSON response', response);  
            })

  }
}
let authModule = new AuthModule();
export {authModule}
