import requests
import json

url = "https://openapi.surreal-ai.com/v1/tts/voice.generate"

payload = json.dumps({
  "text": "Hello, Surreal Engine",
  "voice_name": "en-US-Wavenet-A"
})
headers = {
  'Authorization': 'Bearer bee03bed6352400383d9a51ba325af2f',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
