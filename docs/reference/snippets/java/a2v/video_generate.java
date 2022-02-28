OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"model_id\": \"eva_a0008\",\n    \"audio_url\": \"https://example.com/audio.mp3\"\n}");
Request request = new Request.Builder()
  .url("https://openapi.surreal-ai.com/v1/a2v/video.generate")
  .method("POST", body)
  .addHeader("Authorization", "bee03bed6352400383d9a51ba325af2f")
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
