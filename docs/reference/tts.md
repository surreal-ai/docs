---
title: TTS API
---

# Text to Speech

## List all voices

```
GET /v1/tts/voice.list
```

This API is **Realtime API**.
It will return all supported voice in our system.

### Request

Require no arguments.

### Response

```json
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "name": "en-US-Wavenet-A",
      "gender": "male",
      "language": "English",
      "locale": "en-US"
    },
    {
      "name": "en-US-Wavenet-B",
      "gender": "male",
      "language": "English",
      "locale": "en-US"
    },
    {
      "name": "en-US-Wavenet-C",
      "gender": "female",
      "language": "English",
      "locale": "en-US"
    },
    {
      "name": "en-US-Wavenet-D",
      "gender": "male",
      "language": "English",
      "locale": "en-US"
    }
  ]
}
```

- `name`: The unique name of this voice. This is important for later API calls.
- `gender`: The gender of the voice.
- `language`: The language of the voice.
- `locale`: The locale code for ths voice.

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/reference/snippets/curl/tts/voice-list.sh
:::

::: tab Python
<<< @/docs/reference/snippets/python/tts/voice_list.py
:::

::: tab Golang
<<< @/docs/reference/snippets/golang/tts/voice_list.go
:::

::: tab Javascript
<<< @/docs/reference/snippets/javascript/tts/voice_list.js
:::

::: tab Java
<<< @/docs/reference/snippets/java/tts/voice_list.java
:::

::::



## Generate Voice

```
POST /v1/tts/voice.generate
```

This API is **Realtime API**.
It will return the URL of generated audio.

### Request

```json
{
  "text": "Hello, Surreal Engine.",
  "voice_name": "en-US-Wavenet-A"
}
```

- `text` (required): The text to be speeched.
- `voice_name`: The name of voice to be used.

### Response

```json
{
  "code": 0,
  "data": {
    "url": "https://surreal.oss-accelerate.aliyuncs.com/audio/1490087da1c1476c8561fdc7b8a2fa4c.wav"
  },
  "message": "success"
}
```

This returning `URL` refers to the generate voices

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/reference/snippets/curl/tts/voice-generate.sh
:::

::: tab Python
<<< @/docs/reference/snippets/python/tts/voice_generate.py
:::

::: tab Golang
<<< @/docs/reference/snippets/golang/tts/voice_generate.go
:::

::: tab Javascript
<<< @/docs/reference/snippets/javascript/tts/voice_generate.js
:::

::: tab Java
<<< @/docs/reference/snippets/java/tts/voice_generate.java
:::

::::

