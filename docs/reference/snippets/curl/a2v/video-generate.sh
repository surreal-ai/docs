curl -X POST 'https://openapi.surreal-ai.com/v1/a2v/video.generate' \
    -H  'Authorization: bee03bed6352400383d9a51ba325af2f' \
    -H 'Content-Type: application/json' \
    --data-raw '{
    "model_id": "eva_a0008",
    "audio_url": "https://example.com/audio.mp3"
}'
