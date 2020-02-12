import {json, status} from './http.js'; //импортируем функции из скрипта
import {getBooks } from './printBooks.js';
import {getReaders } from './printReaders.js';
import {printLoginForm} from './auth.js';

document.getElementById("menu1").onclick = function(){
  toogleMenuActive("menu1"); //находится в текущем скрипте
  getBooks(); // импортирована из скрипта (модуля) printBooks.js
};
document.getElementById("menu2").onclick = function(){
  toogleMenuActive("menu2");//находится в текущем скрипте
  getReaders();// импортирована из скрипта (модуля) printReaders.js
};
document.getElementById("menu3").onclick = function(){
  toogleMenuActive("menu3");
  printLoginForm();
};
document.getElementById("menu4").onclick = function(){
  toogleMenuActive("menu4");
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






