var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer bee03bed6352400383d9a51ba325af2f");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://openapi.surreal-ai.com/v1/a2v/video.get?video_id=7895cd9a63564367b0c7b06e6837b5c6", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
