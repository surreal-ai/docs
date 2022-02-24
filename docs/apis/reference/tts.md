---
title: TTS API
---

# Text to Speech

## List all voices

```
GET /v1/tts/voice.list
```

### Response

``` json
{
    "code": 0,
    "message": "success",
    "data": []
}
```

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/apis/reference/snippets/curl/tts-voice-list.sh
:::

::: tab Python
<<< @/docs/apis/reference/snippets/python/tts-voice-list.py
:::

::::
