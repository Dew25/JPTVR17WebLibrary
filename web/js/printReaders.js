
import {json, status} from './http.js';
export {getReaders};

function getReaders(){
  fetch('listReadersJson')
          .then(status)
          .then(json)
          .then(function(data) {  
            printListReaders(data);
            console.log('Request succeeded with JSON response', data);  
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
