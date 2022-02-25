OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://openapi.surreal-ai.com/v1/tts/voice.list")
  .method("GET", null)
  .addHeader("Authorization", "bee03bed6352400383d9a51ba325af2f")
  .build();
Response response = client.newCall(request).execute();
