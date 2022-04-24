---
title: Audio To Video (A2V)
---

# Audio To Video (A2V)
Surreal Engine has great AI capability to generate a talking avatar video. Let's try it.

## List all avatars
Before you send a video generation request, you need to send a HTTP request to Surreal Engine to list all available poses. Remember to replace <<YOUR_TOKEN>> with the token you got from [open api web page](https://open.surreal-ai.com/).
```bash
curl -X GET\
https://openapi.surreal-ai.com/v1/a2v/avatar.list \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```
You should get the response like this:
```json
TODO @aiden
```

## List all avatar poses
Pick one avatar you like and list all poses of it with following command:
```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/a2v/avatar-pose.list \
-H 'Authorization: Bearer <<YOUR_TOKEN>>'
```
The expected resopnse will be:
```json
TODO @aiden
```

## Generate Video
It's time to feel the magic!

Only two information are needed to send along with the HTTP request: audio_url and pose_id.
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
		"video_id":<<VIDEO_ID>>,
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
https://openapi.surreal-ai.com/v1/a2v/video.get\?video_id\=<<VIDEO_ID>> \
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
        "video_url":VIDEO_DOWNLOAD_URL
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


### Audio size limitation
During the Beta release period, the limit of the input audio length is **1 minute**.
