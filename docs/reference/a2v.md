---
title: A2V API
---

# Audio to Video

## List all avatars

```
GET /v1/a2v/avatar.list
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
      TODO: @aiden
    }
  ],
  "message": "success"
}
```

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/reference/snippets/curl/a2v/character-list.sh
:::

::: tab Python
<<< @/docs/reference/snippets/python/a2v/character_list.py
:::

::: tab Golang
<<< @/docs/reference/snippets/golang/a2v/character_list.go
:::

::: tab Javascript
<<< @/docs/reference/snippets/javascript/a2v/character_list.js
:::

::: tab Java
<<< @/docs/reference/snippets/java/a2v/character_list.java
:::

::::

## List all avatar poses

```
GET /v1/a2v/avatar-pose.list?avatar_id=AVATAR_ID
```

This API is **Realtime API**.

It will return all supported poses information for the given avatar_id in our system.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`

**Query Parameter**

`avatar_id` (String type)

### Response

```json
{
  "code": 0,
  "data": [
    {
      TODO: @aiden
    }
  ],
  "message": "success"
}
```


## Generate video by voice

```
POST /v1/a2v/video.generate
```

This API is **Offline Processing API***.

### Request

**Header**

- `Authorization: Bearer <<YOUR_TOKEN>>`
- `Content-Type: application/json`

**Body**
```json
{
    "pose_id": "<<POSE_ID>>",
    "audio_url": "https://example.com/audio"
}
```

- `pose_id` (required): The pose id of the avatar.
- `audio_url` (required): A downloadable audio url.
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


### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/reference/snippets/curl/a2v/video-generate.sh
:::

::: tab Python
<<< @/docs/reference/snippets/python/a2v/video_generate.py
:::

::: tab Golang
<<< @/docs/reference/snippets/golang/a2v/video_generate.go
:::

::: tab Javascript
<<< @/docs/reference/snippets/javascript/a2v/video_generate.js
:::

::: tab Java
<<< @/docs/reference/snippets/java/a2v/video_generate.java
:::

::::


## Get result of video

```
GET /v1/a2v/video.get
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

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/reference/snippets/curl/a2v/video-get.sh
:::

::: tab Python
<<< @/docs/reference/snippets/python/a2v/video_get.py
:::

::: tab Golang
<<< @/docs/reference/snippets/golang/a2v/video_get.go
:::

::: tab Javascript
<<< @/docs/reference/snippets/javascript/a2v/video_get.js
:::

::: tab Java
<<< @/docs/reference/snippets/java/a2v/video_get.java
:::

::::


## List all videos

```
GET /v1/a2v/video.list
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
          "video_url":"<<VIDEO_DOWNLOAD_URL>>",
          "mask_video_url":"<<MASK_VIDEO_DOWNLOAD_URL>>"
        },
        ...,
        {
          "video_id":"<<VIDEO_ID>>",
          "status":"finished",
          "video_url":"<<VIDEO_DOWNLOAD_URL>>",
          "mask_video_url":"<<MASK_VIDEO_DOWNLOAD_URL>>"
        }
    ],
    "message":"success"
}

```
