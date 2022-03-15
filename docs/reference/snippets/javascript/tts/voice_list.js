var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer bee03bed6352400383d9a51ba325af2f");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://openapi.surreal-ai.com/v1/tts/voice.list", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
