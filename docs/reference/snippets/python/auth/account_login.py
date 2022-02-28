import requests
import json

url = "https://openapi.surreal-ai.com/v1/auth/account.login"

payload = json.dumps({
  "username": "cooluser",
  "password": "YipohBe7quoohuev"
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
