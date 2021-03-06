---
title: Basic
---

# Basic

## HTTP APIs

The Surreal Engine APIs is provided as HTTP APIs.
In most cases, there are two kinds of APIs in Surreal Engine AI modules:

- Realtime API: Process AI task immediately, and return the result in the HTTP response.
- Offline processing API: This kind of AI video generation tasks will take more time to process, may be serval minutes or serval hours. You can send status check http request to Surreal Engine to get the video generation status.

You can get more details in the API references sections. 

## Authentication

In every HTTP APIs (excluded those for querying token),
developers should present API token as bearer token in HTTP header.

Let's say that the token is `bee03bed6352400383d9a51ba325af2f`,
to call APIs with bearer token is:

```bash
$ curl -X GET \
    -H 'Authorization: Bearer <<YOUR_TOKEN>>' \
    https://openapi.surreal-ai.com/v1/ping
```

## Passing arguments

In `GET` APIs, developers can pass argument with querystring, for example:

```bash
$ curl -X GET \
    -H 'Authorization: Bearer <<YOUR_TOKEN>>' \
    https://openapi.surreal-ai.com/v1/task.get?task_id=69add05495134b6793de84d8982f87d6
```

In some `POST` APIs, developers should pass argument in HTTP Body in JSON format,
which means pass HTTP header with `Content-Type: application/json` as well:

```bash
$ curl -X POST \
  https://openapi.surreal-ai.com/v1/tts/voice.generate \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <<YOUR_TOKEN>>' \
  --data '{"text": "Hello, surreal engine.", "voice_name": "Fabineu Topshot"}'
```

## Response

Surreal Engine API response like the following structure:

```json
{
    "code": "10001",
    "message": "File Not Found",
    "data": {}
}
```

- `code`: Error code of the response. Specially, `0` means no errors present.
- `message`: The error message for this response.
- `data`: The result of this API call.
