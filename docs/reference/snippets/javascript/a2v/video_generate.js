var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer bee03bed6352400383d9a51ba325af2f");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "model_id": "eva_a0008",
  "audio_url": "https://example.com/audio.wav"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://openapi.surreal-ai.com/v1/a2v/video.generate", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
