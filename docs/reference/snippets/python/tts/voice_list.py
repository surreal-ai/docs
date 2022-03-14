import requests

url = "https://openapi.surreal-ai.com/v1/tts/voice.list"

payload = {}
headers = {
  'Authorization': 'Bearer bee03bed6352400383d9a51ba325af2f'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.content)
