---
title: Talking Photo API
---

# Talking Photo


## Generate video

```
POST /v1/v2v/video.generate
```

This API is **task API***.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`
- `Content-Type: application/json`

**Body**
```json
{
    "image_url": "https://example/image",
    "audio_url": "https://example.com/audio"
}
```

- `image_url` (string, required): A downloadable image url.
- `audio_url` (string, required): A downloadable audio url.

### Response

```json
{
  "code": 0,
  "data": {
    "video_id": "<<VIDEO_ID>>"",
    "status": "pending"
  },
  "message": "success",
}
```


## Get result of video

```
GET /v1/v2v/video.get
```

This API is **Realtime API**.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`

**Query Parameter**

- `video_id` (querystring): The generating video ID.


### Response

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

## List all videos

```
GET /v1/v2v/video.list
```

This API is **Realtime API**.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`

Require no arguments.

### Response

```json
{
    "code":0,
    "data":[
        {
          "video_id":"<<VIDEO_ID>>",
          "status":"finished",
          "video_url":"<<VIDEO_DOWNLOAD_URL>>"
        },
        ...,
        {
          "video_id":"<<VIDEO_ID>>",
          "status":"finished",
          "video_url":"<<VIDEO_DOWNLOAD_URL>>"
        }
    ],
    "message":"success"
}

```
