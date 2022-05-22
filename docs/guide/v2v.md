---
title: Talking Photo
---

# Talking Photo

Surreal Engine has great AI capability to animate the human face in the photo and make him/her talking.


## Generate Video

Generating a talking photo video is pretty easy, you can simply send http pose request with two fields: `image_url` and `audio_url`

```bash
curl -X POST \
https://openapi.surreal-ai.com/v1/v2v/video.generate \
-H 'Authorization: Bearer <<YOUR_TOKEN>>' \
-H 'Content-Type: application/json' \
-d '{"audio_url": <<DOWNLOADABLE_AUDIO_URL>>, "image_url": "<<DOWNLOADABLE_IMAGE_URL>>"}'
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
https://openapi.surreal-ai.com/v1/v2v/video.get?video_id=<<VIDEO_ID>> \
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
        "video_url":"VIDEO_DOWNLOAD_URL"
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


### List Video

You can list all your videos by simply sending the following command to Surreal Engine:

```bash
curl -X GET \
https://openapi.surreal-ai.com/v1/v2v/video.list \
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
        	"video_url":"VIDEO_DOWNLOAD_URL"
    	},
    	...,
    	{
    		"video_id":"<<VIDEO_ID>>",
        	"status":"error"
    	},
    		
    ],
    "message":"success"
    	}
    	}
}
```


### Audio size limitation

During the Beta release period, the limit of the input audio length is **1 minute**.

### Image limitation
To make a high quality talking photo video, the face area of your photo has to be larger than 160*160, other wise your generate request will fail with 400 error.

