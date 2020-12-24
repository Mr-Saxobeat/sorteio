var xhr = new XMLHttpRequest();
var pessoas = [];
var restantes = [];
var entrants = [];

xhr.responseType = 'json';
xhr.open('GET', 'pessoasjson/');
xhr.onload = function() {
  xhr.response.forEach((item, i) => {
    pessoas.push(item);
    restantes.push(item);
    entrants.push(item);
  });
};
xhr.send(null);
