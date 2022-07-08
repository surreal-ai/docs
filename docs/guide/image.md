---
title: Image
---

# Image

## Upload Face

Analyzes the given image and extracts the face from it.

```bash
curl -X POST https://openapi.surreal-ai.com/v1/image/face.upload
   -H 'Content-Type: application/json'
   -H 'Authorization: Bearer <<TOKEN>>'
   -d '{"image_url": "<<DOWNLOADABLE_IMAGE_URL>>"}'
```

Response:
```json
{
    "message": "success",
    "code": "0",
    "data": {
        "face_id": "<<FACE_ID>>",
        "image_url": "<<FACE_IMAGE_URL>>"
    }
}
```

## Analyze Face

Analyzes the given image and returns the all detected faces.

```bash
curl -X POST https://openapi.surreal-ai.com/v1/image/face.analyze
   -H 'Content-Type: application/json'
   -H 'Authorization: Bearer <<TOKEN>>'
   -d '{"image_url": "<<DOWNLOADABLE_IMAGE_URL>>"}'
```

Response:
```json
{
  "message": "success",
  "code": "0",
  "data": {
    "analysis_id": "<<ANALYSIS_ID>>",
    "faces": {
      "0": "<<FACE_URL>>"
    }
  }
}
```

## Swap Face

Swap faces of the analyzed image by uploaded faces.

```bash
curl -X POST https://openapi.dev.surreal-ai.com/v1/image/face.swap
   -H 'Content-Type: application/json'
   -H 'Authorization: Bearer <<TOKEN>>'
   -d '{"analysis_id": "<<ANALYSIS_ID>>", "faces": {"0": "<<FACE_ID>>"}}'
```

Response:
```json
{
    "message": "success",
    "code": "0",
    "data": {
        "face_swap_id": "<<FACE_SWAP_ID>>",
        "image_url": "<<FACE_SWAPPED_IMAGE_URL>>"
    }
}
```
