---
title: Video Swap Face
---

# Video Swap Face

## Analyze Face

Analyzes the given video and returns the all detected faces.

```bash
curl -X POST https://openapi.surreal-ai.com/v1/swap/video.analyze \
   -H 'Content-Type: application/json' \
   -H 'Authorization: Bearer <<TOKEN>>' \
   -d '{"video_url": "<<DOWNLOADABLE_VIDEO_URL>>"}'
```

Response:
```json
{
  "code": 0,
  "data": {
    "analyze_id": "<<ANALYSIS_ID>>",
    "status": "pending"
  },
  "message": "success"
}
```

## Get Analysis Result


```bash
curl 'https://openapi.surreal-ai.com/v1/swap/analyze_result.get?analyze_id=<<ANALYSIS_ID>>' \
   -H 'Content-Type: application/json' \
   -H 'Authorization: Bearer <<TOKEN>>'
```

Response:
```json
{
  "code": 0,
  "data": {
    "analyze_id": "11e11572-281f-4b5c-a179-4693fded5d8f",
    "status": "finished",
    "align_id_to_image_urls": {
      "0": "<<FACE_URL>>"
    }
  },
  "message": "success"
}
```

## Swap Face

Swap faces of the analyzed video by uploaded faces.

```bash
curl -X POST https://openapi.dev.surreal-ai.com/v1/swap/video.generate \
   -H 'Content-Type: application/json' \
   -H 'Authorization: Bearer <<TOKEN>>' \
     -d '{"analyze_id": "<<ANALYSIS_ID>>", "face_url_list": ["<<FACE_URL>>"]}'
```

Response:
```json
{
  "code": 0,
  "data": {
    "video_id": "<<VIDEO_ID>>",
    "status": "pending"
  },
  "message": "success"
}
```

## Get Swap Face Video

```bash
curl 'https://openapi.dev.surreal-ai.com/v1/swap/video.get?video_id=<<VIDEO_ID>>' \
   -H 'Content-Type: application/json' \
   -H 'Authorization: Bearer <<TOKEN>>'
```

Response:
```json
{
  "code": 0,
  "data": {
    "video_id": "<<VIDEO_ID>>",
    "status": "finished",
    "video_url": "<<VIDEO_URL>>",
    "preview_url": "<<PREVIEW_URL>>",
    "mask_video_url": "<<MASK_VIDEO_URL>>"
  },
  "message": "success"
}
```
