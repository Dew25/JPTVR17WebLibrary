import {json, status} from './http.js'; //импортируем функции из скрипта
import {getBooks } from './printBooks.js';
import {getReaders } from './printReaders.js';
import {printLoginForm,systemOutput} from './auth.js';

document.getElementById("newBook").onclick = function(){
  toogleMenuActive("newBook"); //находится в текущем скрипте
  getBooks(); // импортирована из скрипта (модуля) printBooks.js
};
document.getElementById("listBooks").onclick = function(){
  toogleMenuActive("listBooks");//находится в текущем скрипте
  getReaders();// импортирована из скрипта (модуля) printReaders.js
};
document.getElementById("showLogin").onclick = function(){
  toogleMenuActive("showLogin");
  printLoginForm();
};
document.getElementById("sysout").onclick = function(){
  toogleMenuActive("sysout");
  systemOutput();
};

function toogleMenuActive(elementId){
  let activeElement = document.getElementById(elementId);
  let passiveElements = document.getElementsByClassName("nav-item");
  for(let i = 0; i < passiveElements.length; i++){
    if(activeElement === passiveElements[i]){
      passiveElements[i].classList.add("active");
    }else{
      if(passiveElements[i].classList.contains("active")){
        passiveElements[i].classList.remove("active");
      }
    }
  }
}







