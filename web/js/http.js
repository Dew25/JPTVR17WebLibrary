//делаем доступными функции в других модулях
export {status,json};

function status(response) {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error(response.statusText))  
  }  
}
function json(response) {  
  return response.json()  
}

