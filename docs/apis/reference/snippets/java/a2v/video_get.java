OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://openapi.surreal-ai.com/v1/a2v/video.get?video_id=7895cd9a63564367b0c7b06e6837b5c6")
  .method("GET", null)
  .addHeader("Authorization", "bee03bed6352400383d9a51ba325af2f")
  .build();
Response response = client.newCall(request).execute();
