---
title: Talking CG Avatar
---

# Talking CG Avatar

Surreal Engine also provides AI capability to generate a CG avatar from given head portrait photo and animate the avatar to talk.


## Generate a CG avatar

Before you send a video generation request, you need to send a HTTP request to Surreal Engine to generate your own CG avatar. Remember to replace <<YOUR_TOKEN>> with the token you got from [https://open.surreal-ai.com](https://open.surreal-ai.com/).

```bash
curl -X POST \
-m 100 \
https://openapi.surreal-ai.com/v1/cg_avatar/avatar.generate \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
-H 'Content-Type: application/json' \
-d '{"image_url": <<DOWNLOADABLE_IMAGE_URL>>}'
```

**Notes:** This request usulaly takes 40-50 seconds to generate the cg avatar, please set enough timeout threshold for the request. 
You should get the response like this:

```json
{
    "code": 0,
    "data": {
        "avatar_id":"<<YOUR_GENERATED_CG_AVATAR_ID>>",
        "gender":"male",
        "preview_url":"<<THE_PREVIE_IMAGE_URL_OF_YOUR_CG_AVATAR>>"
    },
    "message": "success"
}
```

{"code":0,"data":[{"avatar_id":"b4123d38-a6e3-40f3-a12c-2d58ac2e115c","gender":"male","preview_url":"https://surreal.oss-cn-shenzhen.aliyuncs.com/cghuman%2Favatar_preview%2F7455388b-a033-4f4b-8c96-2e3bf7aa0dbe.png?Expires=1652006948&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=BY9AA%2BuGnKymbGg5XDUQ3a%2BAFl4%3D","avatar_url":"https://surreal.oss-cn-shenzhen.aliyuncs.com/cghuman%2Favatars%2F7455388b-a033-4f4b-8c96-2e3bf7aa0dbe.glb?Expires=1652006948&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=AG7LbYq1O5kmGUGa3WD34K6mtfc%3D"}],"message":"success"}

## List all your generated cg avatar

Your can list all your generated cg avatars by sending the request below:

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/cg_avatar/avatar.list \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```

The expected resopnse will be:

```json
{
    "code": 0,
    "data": [
        {
            "avatar_id":"<<YOUR_GENERATED_CG_AVATAR_ID_1>>",
            "gender":"female",
            "preview_url":"<<THE_PREVIE_IMAGE_URL_OF_YOUR_CG_AVATAR>>"
        },
        ...
        {
            "avatar_id":"<<YOUR_GENERATED_CG_AVATAR_ID_N>>",
            "gender":"male",
            "preview_url":"<<THE_PREVIE_IMAGE_URL_OF_YOUR_CG_AVATAR_N>>"
        },
    ],
    "message": "success"
}
```


## Generate Video

Wanna make your own avatar talking? No problem! 

Only two information are needed to send along with the HTTP request: `audio_url` and `avatar_id`.

Pick one avatar_id from all your generated avatars and prepare an downloadable audio url (wav or mp3 format).

Note: If you don't have one, you can use Surreal Engine TTS to generate one!

```bash
curl -X POST \
https://openapi.surreal-ai.com/v1/cg_avatar/video.generate \
-H 'Authorization: Bearer <<YOUR_TOKEN>>' \
-H 'Content-Type: application/json' \
-d '{"audio_url": <<DOWNLOADABLE_AUDIO_URL>>, "avatar_id": "YOUR_CG_AVATAR_ID"}'
```

Response:

```json
{
    "code":0,
    "data": {
        "video_id":"<<VIDEO_ID>>",
        "status":"pending"
    },
    "message":"success"
}
```

This is an offline processing api. It takes some time to render the video for you. Please remember the <<VIDEO_ID>> from the response and check the status in 10 minutes.


## Get Video Status

Surreal Engine provides HTTP API to let you check the video generation status. Simply send the following command to Surreal Engine:

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/cg_avatar/video.get?video_id=<<VIDEO_ID>> \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```

All possible responses are as follow:

**In_Progressing**

```json
{
    "code":0,
    "data":{
        "video_id":"<<VIDEO_ID>>",
        "status":"in_progressing"
    },
    "message":"success"
}
```

Surreal Enegine is still rendering your video, be patient and check it a few minutes later.

**Finished**

```json
{
    "code":0,
    "data":{
        "video_id":"<<VIDEO_ID>>",
        "status":"finished",
        "video_url":"<<VIDEO_DOWNLOAD_URL>>"
    },
    "message":"success"
}
```

Your video is generated! Download your video and check it, you will love it. 

**Error**

```json
{
    "code":0,
    "data":{
        "video_id":"<<VIDEO_ID>>",
        "status":"error"
    },
    "message":"success"
}
```

An error status indicates an internal error in Surreal Engine, feel free to report it in our discord channel and we'll look into it!


## List Video

You can list all your videos by simply sending the following command to Surreal Engine:

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/cg_avatar/video.list \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```

This will return a list of videos with various status: `in_progressing`, `finished`, `error` etc.

You should get response as follow:

**In_Progressing**

```json
{
    "code":0,
    "data":[
        {
            "video_id":"<<VIDEO_ID>>",
            "status":"in_progressing"
        },
        {
            "video_id":"<<VIDEO_ID>>",
            "status":"finished",
            "video_url":"<<VIDEO_DOWNLOAD_URL>>"
        },
        ...,
        {
            "video_id":"<<VIDEO_ID>>",
            "status":"error"
        },
            
    ],
    "message":"success"
}
```

## Limitations

### Audio size limitation

During the Beta release period, the limit of the input audio length is **1 minute**.

### Image limitation

Please make sure your image has recognizable person inside it, otherwise the avatar.generate request will fail.

