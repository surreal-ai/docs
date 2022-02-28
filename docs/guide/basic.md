---
title: Basic
---

# Basic

## HTTP APIs

The Surreal Engine APIs is provided as HTTP APIs.
In most cases, there are two kinds of APIs in Surreal Engine AI modules:

- Realtime API: Process AI task immediately, and return the result in the HTTP request.
- Task API: This kind of AI tasks will take more time to process, may be serval minutes or serval hours. The status an result of task should be return by another API call.

Besides, theres are some other APIs in Surreal Engine for file transfering, like get an s3 upload URL.
You can get more detail in API references sections.

## Authentication

In every HTTP APIs (excluded those for querying token),
developers should present API token as bearer token in HTTP header.

Let's say that the token is `bee03bed6352400383d9a51ba325af2f`,
to call APIs with bearer token is:

```bash
$ curl -X GET \
    -H 'Authorization: Bearer bee03bed6352400383d9a51ba325af2f' \
    https://openapi.surreal-ai.com/v1/ping
```

## Passing arguments

In `GET` APIs, developers can pass argument with querystring, for example:

```bash
$ curl -X GET \
    -H 'Authorization: Bearer bee03bed6352400383d9a51ba325af2f' \
    https://openapi.surreal-ai.com/v1/task.get?task_id=69add05495134b6793de84d8982f87d6
```

In some `POST` APIs, developers should pass argument in HTTP Body in JSON format,
which means pass HTTP header with `Content-Type: application/json` as well:

```bash
$ curl -X POST \
  https://openapi.surreal-ai.com/v1/tts/voice.create \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer bee03bed6352400383d9a51ba325af2f' \
  --data '{"text": "Hello, surreal engine."}'
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
