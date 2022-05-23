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

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`

Require no arguments.

### Response

```json
{
    "code": 0,
    "data":
    [
        {
            "voice_name": "Ekram G.",
            "gender": "Male",
            "language": "Arabic",
            "locale": "ar-SA",
            "preview_url": "https://lovo-assets.s3.us-west-2.amazonaws.com/skin_sample/1625732273462.wav",
            "tags": "Middle-Aged,E-learning & Presentations,Explainer Videos"
        },
        ...,
        {
            "voice_name": "Abbas A.",
            "gender": "Male",
            "language": "Arabic",
            "locale": "ar-SA",
            "preview_url": "https://lovo-assets.s3.us-west-2.amazonaws.com/skin_sample/1625732265612.wav",
            "tags": "Young Adult,Ads,E-learning & Presentations,Product demos,Explainer Videos"
        }
    ],
    "message": "success"
}
```

- `voice`: The unique name of this voice. This is important for later API calls.
- `gender`: The gender of the voice.
- `language`: The language of the voice.
- `locale`: The locale code for ths voice.
- `preview_url`: The downloadable demo audio url to download.
- `tags`: The attributes of the voice.

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

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`

**Body**

```json
{
  "text": "Hello, Surreal Engine.",
  "voice_name": "en-US-Wavenet-A"
}
```

- `text` (string, required): The text to be speeched.
- `voice_name` (string, required): The name of voice to be used.


### Response

```json
{
  "code": 0,
  "data": {
    "url": "<<AUDIO_URL>>"
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

