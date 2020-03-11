
//import {getBooks } from './printBooks.js';
import {readerModule} from './ReaderModule.js';
import {bookModule} from './BookModule.js';
import {authModule} from './AuthModule.js';

document.getElementById("newBooks").onclick = function(){
  toogleMenuActive("newBooks"); //находится в текущем скрипте
  bookModule.listBooks(); // импортирована из скрипта (модуля) book.js
};
document.getElementById("newBook").onclick = function(){
  toogleMenuActive("newBook"); //находится в текущем скрипте
  bookModule.printNewBookForm(); // импортирована из скрипта (модуля) book.js
};
document.getElementById("listReaders").onclick = function(){
  toogleMenuActive("listReaders");//находится в текущем скрипте
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
authMenu();

function authMenu(){
  let user = null;
  if(localStorage.getItem('user') !== null){
    user = JSON.parse(localStorage.getItem('user'));
  }
  if(user !== null){
    document.getElementById("newBook").style.display = 'block';
    document.getElementById("listReaders").style.display = 'block';
    document.getElementById("sysout").style.display = 'block';
    document.getElementById("showLogin").style.display = 'none';
  }else{
    document.getElementById("newBook").style.display = 'none';
    document.getElementById("listReaders").style.display = 'none';
    document.getElementById("sysout").style.display = 'none';
    document.getElementById("showLogin").style.display = 'block';
  }
}


