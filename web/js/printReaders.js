
import {http} from './http.js';
import {getBooks} from './printBooks.js';
export {getReaders};

function getReaders(){
  http({url:'listReadersJson',options:{method:'GET'}})
          .then(function(response) {  
            if(response.authStatus === "true"){
              printListReaders(response.dataJson);
            }else{
              getBooks();
              document.getElementById("info").innerHTML="У вас нет прав. Войдите!"
            }
            console.log('Request succeeded with JSON response', response);  
          })
          .catch(function(error) {  
            console.log('Request failed', error);  
          });
}

function printListReaders(data){
  let cards = '<div class="w-100 d-flex justify-content-center">';
  for(let i=0;i<data.length;i++){
    cards+=
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
}
