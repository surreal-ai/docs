---
title: Talking CG Avatar API
---

# Talking CG Avatar

## Generate avatar

```
POST /v1/cg_avatar/avatar.generate
```

This API is **Realtime API**. It usually takes about 1 minute to generate the avatar.
It will return generate an CG Avatar based on the given head portrait image and return the preview image.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`

**Body**
```json
{
    "image_url": "https://example.com/head_portrait"
}
```

- `image_url` (string, required): A downloadable image url that has a recognizable human face.

### Response

```json
{
  "code": 0,
  "data": [
    {
      "avatar_id":"<<YOUR_GENERATED_CG_AVATAR_ID>>",
      "gender":"male" or "female",
      "preview_url":"<<THE_PREVIE_IMAGE_URL_OF_YOUR_CG_AVATAR>>"}
  ],
  "message": "success"
}
```


## List all avatars

```
GET /v1/cg_avatar/avatar.list
```

This API is **Realtime API**.
It will return all supported avatars in our system.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`

Require no arguments.

### Response

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


## Generate video

```
POST /v1/cg_avatar/video.generate
```

This API is **Offline Processing API***.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`
- `Content-Type: application/json`

**Body**
```json
{
    "avatar_id": "<<YOUR_GENERATED_CG_AVATAR_ID>>",
    "audio_url": "https://example.com/audio"
}
```

- `avatar_id` (string, required): The id of avatar generated through /v1/cg_avatar/avatar.generate API.
- `audio_url` (string, required): A downloadable audio url.

### Response

```json
{
  "code": 0,
  "data": {
    "video_id": "<<VIDEO_ID>>",
    "status": "pending"
  },
  "message": "success",
}
```


## Get result of video

```
GET /v1/cg_avatar/video.get
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
        "video_url":"<<VIDEO_DOWNLOAD_URL>>",
        "mask_video_url":"<<MASK_VIDEO_DOWNLOAD_URL>>"
    },
    "message":"success"
}

```

## List all videos

```
GET /v1/cg_avatar/video.list
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
