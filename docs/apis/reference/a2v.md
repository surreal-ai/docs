---
title: A2V API
---

# Audio to Video

## List all characters

```
GET /v1/a2v/character.list
```

This API is **Realtime API**.
It will return all supported characters in our system.

### Request

Require no arguments.

### Response

```json
{
  "code": 0,
  "data": [
    {
      "model_id": "eva_a0008",
      "name": "Eva 01",
      "display_name": "Eva 01",
      "gender": "female",
      "preview_url": "https://surreal.oss-cn-shenzhen-internal.aliyuncs.com/?Expires=1645774038&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=ISLblt8OFvem1f2ItOzUN8acCEs%3D"
    }
  ],
  "message": "success"
}
```

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/apis/reference/snippets/curl/a2v/character-list.sh
:::

::: tab Python
<<< @/docs/apis/reference/snippets/python/a2v/character_list.py
:::

::: tab Golang
<<< @/docs/apis/reference/snippets/golang/a2v/character_list.go
:::

::: tab Javascript
<<< @/docs/apis/reference/snippets/javascript/a2v/character_list.js
:::

::: tab Java
<<< @/docs/apis/reference/snippets/java/a2v/character_list.java
:::

::::


## Generate video by voice

```
POST /v1/a2v/video.generate
```

This API is **task API***.

### Request

```json
{
    "model_id": "eva_a0008",
    "audio_url": "https://example.com/audio"
}
```

### Response

```json
{
  "code": 0,
  "data": {
    "video_id": "7895cd9a63564367b0c7b06e6837b5c6"
  },
  "message": "success",
}
```


### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/apis/reference/snippets/curl/a2v/video-generate.sh
:::

::: tab Python
<<< @/docs/apis/reference/snippets/python/a2v/video_generate.py
:::

::: tab Golang
<<< @/docs/apis/reference/snippets/golang/a2v/video_generate.go
:::

::: tab Javascript
<<< @/docs/apis/reference/snippets/javascript/a2v/video_generate.js
:::

::: tab Java
<<< @/docs/apis/reference/snippets/java/a2v/video_generate.java
:::

::::


## Get result of video

```
GET /v1/a2v/video.get
```

This API is **Realtime API**.

### Request

- `video_id` (querystring): The generating video ID.

### Response

```json
{
  "code": 0,
  "data": {
    "video_id": "7895cd9a63564367b0c7b06e6837b5c6",
    "video_url": "https://surreal.oss-accelerate.aliyuncs.com/audio/1490087da1c1476c8561fdc7b8a2fa4c.mp3?OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Expires=1645772214&Signature=mvgGOpPOKy3hIyFLwnxhFmEm%2BM4%3D"
  },
  "message": "success"
}

```

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/apis/reference/snippets/curl/a2v/video-get.sh
:::

::: tab Python
<<< @/docs/apis/reference/snippets/python/a2v/video_get.py
:::

::: tab Golang
<<< @/docs/apis/reference/snippets/golang/a2v/video_get.go
:::

::: tab Javascript
<<< @/docs/apis/reference/snippets/javascript/a2v/video_get.js
:::

::: tab Java
<<< @/docs/apis/reference/snippets/java/a2v/video_get.java
:::

::::


