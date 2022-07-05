---
title: Image
---

# Image

## Upload Face

Analyzes the given image and extracts the face from it.

```bash
curl -X POST https://openapi.dev.surreal-ai.com/v1/face.upload
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

## Transform/Swap Face

Swap faces of the analyzed image by uploaded faces.

```bash
curl -X POST https://openapi.dev.surreal-ai.com/v1/image/face.transform
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
        "transformation_id": "<<TRANSFORMATION_ID>>",
        "image_url": "<<TRANSFORMED_IMAGE_URL>>"
    }
}
```