import {json, status} from './http.js';
import {getBooks } from './printBooks.js';

export {printLoginForm};

function printLoginForm(){
  let cards = '<div class="w-100 d-flex justify-content-center">';
    cards+=
     `<div class="card border-primary p-2" style="max-width: 30rem;">
        <div class="card-header text-center">Введите логин и пароль</div>
        <div class="card-body">
          <p class="card-text d-flex justify-content-between">Логин: <input class="ml-2" type="text" id="enter"></p>
          <p class="card-text d-flex justify-content-between">Пароль: <input class="ml-2" type="text" id="password"></p>
          <p class="card-text"><button class="btn btn-light w-100" type="button" id="btnEnter">Войти</button</p>
        </div>
      </div>`;
    cards +='</div>';
  document.getElementById('content').innerHTML = cards;
  document.getElementById('btnEnter').onclick = function(){
    auth();
  }
}
function auth(){
 
}