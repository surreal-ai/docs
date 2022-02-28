var myHeaders = new Headers();
myHeaders.append("Authorization", "bee03bed6352400383d9a51ba325af2f");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "text": "Hello, Surreal Engine",
  "voice_name": "en-US-Wavenet-A"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://openapi.surreal-ai.com/v1/tts/voice.generate", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
