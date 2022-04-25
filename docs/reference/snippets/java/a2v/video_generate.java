OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"pose_id\": \"liza_a0008\",\n    \"audio_url\": \"https://example.com/audio.wav\"\n}");
Request request = new Request.Builder()
  .url("https://openapi.surreal-ai.com/v1/a2v/video.generate")
  .method("POST", body)
  .addHeader("Authorization", "Bearer bee03bed6352400383d9a51ba325af2f")
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
