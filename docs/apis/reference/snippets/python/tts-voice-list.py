import requests


url = "https://openapi.surreal-ai.com/v1/tts/voice.list"
response = requests.get(url)
print(response.json())
