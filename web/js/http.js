/*  fetch немножко параноик и по умолчанию не 
*   передаёт куки от сайта, на который 
*   отправляется запрос (а идентификатор 
*   сессии хранится в куке PHPSESSID). 
*   За передачу кук и заголовков авторизации 
*   отвечает опция credentials, которая может 
*   иметь одно из следующих значений:
*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;
*     'same-origin' — передавать, только если домен, на который 
*       отправляется запрос, совпадает с доменом текущего сайта 
*       (точнее, origin; сложный случай, но текущего вопроса не касается, 
*       так что не буду его подробно описывать);
*     'include' — передавать.
*/
//делаем доступными функции в других модулях
export {status,json, http, fetchOpts};
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
//let opt={
//  method: 'GET',
//  data: null
//};
function fetchOpts(opt){
  if(opt.method === 'POST'){
    return {
            method: opt.method,
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: 'include',
            body: JSON.stringify(opt.data)
          };
  }else{
    return {
            method: opt.method,
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: 'include'
          };
  }
};
//let httpOptions={
//  url: '',
//  fetchOpt: {
//    method: 'GET',
//    data: null
//  },
//  params: null
//};

function http(httpOptions){
  if (httpOptions.params != null){
    httpOptions.url= httpOptions.url+'?'+queryParams(httpOptions.params);
  }
  let options = fetchOpts(httpOptions.options);
  return fetch(httpOptions.url, options)
            .then(status)
            .then(json)
            .catch((ex) => console.log("Fetch Exception", ex));
};
function queryParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

