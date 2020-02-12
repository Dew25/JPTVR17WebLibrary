import {json, status} from './http.js';
export {getBooks};

function getBooks(){
  fetch('listNewBooks')
           
}
function printListNewBooks(data){
  let cards = '<div class="w-100 d-flex justify-content-center">';
  for(let i=0;i<data.length;i++){
    cards+=
     `<div class="card border-primary m-3" style="max-width: 10rem;">
        <div class="card-header">${data[i].name}</div>
        <div class="card-body">
          <h4 class="card-title">${data[i].author}</h4>
          <p class="card-text">${data[i].publishedYear}</p>
        </div>
      </div>`;
  }
  cards +='</div>';
  document.getElementById('content').innerHTML = cards;
}


