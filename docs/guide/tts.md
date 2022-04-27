---
title: Text To Speech (TTS)
---

# Text To Speech (TTS)

Surreal Engine provides the ability to generate audio content for developer. Please follow the steps to get your first AI generated audio content!

## List all voices

First, you need to send a HTTP request to Surreal Engine to list all available voices. Remember to replace <<YOUR_TOKEN>> with the token you got from [https://open.surreal-ai.com](https://open.surreal-ai.com/).

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/tts/voice.list \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```

You should get the response like this:

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

You can download audio content with the returned preview urls to pick your favorite voice.

We highly recommend you to save this voice list in your local storage as this list won't change often.


## Generate Audio

Now, it's time to generate your first AI Content.

Pick one of the voices returned in the previous step and send the following curl command:

```bash
curl -X POST \
https://openapi.surreal-ai.com/v1/tts/voice.generate \
-H 'Authorization: Bearer <<YOUR_TOKEN>>' \
-H 'Content-Type: application/json' \
-d '{"text": "Hello, you are using Surreal Engine to generate your first audio content!", "voice_name": "Fabineu Topshot"}'
```

The reponse should be returned in a few seconds, the latency is closely relative to your input text length.

```json
{
	"code":0,
	"data": {
		"url":"AUDIO_URL_TO_DOWNLOAD"
	},
	"message":"success"
}
```

Congratulations, your audio is generated, you can download it and share it anywhere.

### Input size limitation

During the Beta release period, the limit of the input text length is **500** characters.
