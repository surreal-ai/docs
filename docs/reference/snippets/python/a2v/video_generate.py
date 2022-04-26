import requests
import json

url = "https://openapi.surreal-ai.com/v1/a2v/video.generate"

payload = json.dumps({
  "pose_id": "liza_a0008",
  "audio_url": "https://example.com/audio.wav"
})
headers = {
  'Authorization': 'Bearer bee03bed6352400383d9a51ba325af2f',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
