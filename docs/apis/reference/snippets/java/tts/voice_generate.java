OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"text\": \"Hello, Surreal Engine\",\n    \"voice_name\": \"en-US-Wavenet-A\"\n}");
Request request = new Request.Builder()
  .url("https://openapi.surreal-ai.com/v1/tts/voice.generate")
  .method("POST", body)
  .addHeader("Authorization", "bee03bed6352400383d9a51ba325af2f")
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
