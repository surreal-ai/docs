---
title: Audio To Video (A2V)
---

# Audio To Video (A2V)

Surreal Engine has great AI capability to generate a talking avatar video. Let's try it.

## List all avatars

Before you send a video generation request, you need to send a HTTP request to Surreal Engine to list all available poses. Remember to replace <<YOUR_TOKEN>> with the token you got from [https://open.surreal-ai.com](https://open.surreal-ai.com/).

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/a2v/avatar.list \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```

You should get the response like this:

```json
{
    "code": 0,
    "data": [
        {
            "id": 1,
            "avatar_type": "cg_human",
            "name": "jason",
            "gender": "male",
            "display_name": "Jason",
            "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fcg%2Fv1%2F01_jason%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=829%2F1AdADAmkCPinl0C5ch3KCIs%3D",
            "poses": [
                {
                    "pose_id": "01_jason",
                    "name": "Jason",
                    "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fcg%2Fv1%2F01_jason%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=829%2F1AdADAmkCPinl0C5ch3KCIs%3D"
                }
            ]
        },
        {
            "id": 2,
            "avatar_type": "cg_human",
            "name": "sooyon",
            "gender": "female",
            "display_name": "Sooyon",
            "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fcg%2Fv1%2F02_sooyon%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=P%2FVIGKQ0d0ky1QmepEif6Cbsuvc%3D",
            "poses": [
                {
                    "pose_id": "02_sooyon",
                    "name": "Sooyon",
                    "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fcg%2Fv1%2F02_sooyon%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=P%2FVIGKQ0d0ky1QmepEif6Cbsuvc%3D"
                }
            ]
        },
        {
            "id": 29,
            "avatar_type": "human",
            "name": "peter",
            "gender": "male",
            "display_name": "Peter",
            "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fv3%2Fkem_13%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=Ob9yhXsQ5EOttfMLNPD5PMeKDC8%3D",
            "poses": [
                {
                    "pose_id": "kem_03",
                    "name": "Peter 03",
                    "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fv3%2Fkem_03%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=TIFjfaZsKNuYkA1lOWzwKlYap6A%3D"
                },
                {
                    "pose_id": "kem_03",
                    "name": "Peter 01",
                    "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fv3%2Fkem_13%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=Ob9yhXsQ5EOttfMLNPD5PMeKDC8%3D"
                }
            ]
        },
        ...

    ]
}
```


## List all avatar poses

Pick one avatar you like and list all poses of it with following command:

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/a2v/avatar-pose.list?avatar_id=<<AVATAR_ID>> \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```

The expected resopnse will be:

```json
{
    "code": 0,
    "data": [
        {
            "pose_id": "kem_03",
            "name": "Peter 03",
            "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fv3%2Fkem_03%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=TIFjfaZsKNuYkA1lOWzwKlYap6A%3D"
        },
        {
            "pose_id": "kem_03",
            "name": "Peter 01",
            "preview_url": "https://surreal.oss-cn-shenzhen.aliyuncs.com/tahoe_virtual_char%2Fv3%2Fkem_13%2Ftarget.png?Expires=1650862302&OSSAccessKeyId=LTAI4FhUZsa1YYumWbTWusLN&Signature=Ob9yhXsQ5EOttfMLNPD5PMeKDC8%3D"
        }
    ]
}
```


## Generate Video

It's time to feel the magic!

Only two information are needed to send along with the HTTP request: `audio_url` and `pose_id`.

Pick one pose id from the previous response and prepare an downloadable audio url (wav or mp3 format).

Note: If you don't have one, you can use Surreal Engine TTS to generate one!

```bash
curl -X POST \
https://openapi.surreal-ai.com/v1/a2v/video.generate \
-H 'Authorization: Bearer <<YOUR_TOKEN>>' \
-H 'Content-Type: application/json' \
-d '{"audio_url": <<DOWNLOADABLE_AUDIO_URL>>, "pose_id": "liza_a0008"}'
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


### Get Video Status

Surreal Engine provides HTTP API to let you check the video generation status. Simply send the following command to Surreal Engine:

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/a2v/video.get?video_id=<<VIDEO_ID>> \
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
        "video_url":"<<VIDEO_DOWNLOAD_URL>>",
        "mask_video_url": "<<MASK_VIDEO_URL>>"
    },
    "message":"success"
}
```

Your video is generated! Download your video and check it, you will love it. In addition, we also provide mask video for you so that you can put the talking avatar without background everywhere!

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

### List Video

You can list all your videos by simply sending the following command to Surreal Engine:

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/a2v/video.list \
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
            "video_url":"<<VIDEO_DOWNLOAD_URL>>",
            "mask_video_url": "<<MASK_VIDEO_DOWNLOAD_URL>>"
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


### Audio size limitation

During the Beta release period, the limit of the input audio length is **1 minute**.
