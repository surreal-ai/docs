import requests

url = "https://openapi.surreal-ai.com/v1/a2v/video.get?video_id=7895cd9a63564367b0c7b06e6837b5c6"

payload = ""
headers = {
  'Authorization': 'Bearer bee03bed6352400383d9a51ba325af2f'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
