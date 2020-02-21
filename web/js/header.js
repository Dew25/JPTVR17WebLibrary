
//import {getBooks } from './printBooks.js';
import {readerModule} from './ReaderModule.js';
import {bookModule} from './BookModule.js';
import {authModule} from './AuthModule.js';

document.getElementById("newBook").onclick = function(){
  toogleMenuActive("newBook"); //находится в текущем скрипте
  bookModule.listBooks(); // импортирована из скрипта (модуля) book.js
};
document.getElementById("listBooks").onclick = function(){
  toogleMenuActive("listBooks");//находится в текущем скрипте
  readerModule.listReaders();// импортирована из скрипта (модуля) reader.js
};
document.getElementById("showLogin").onclick = function(){
  toogleMenuActive("showLogin");
  authModule.printLoginForm();
};
document.getElementById("sysout").onclick = function(){
  toogleMenuActive("sysout");
  authModule.systemOutput();
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







