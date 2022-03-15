var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer bee03bed6352400383d9a51ba325af2f");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://openapi.surreal-ai.com/v1/a2v/character.list", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
