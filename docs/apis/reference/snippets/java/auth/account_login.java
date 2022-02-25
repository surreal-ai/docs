OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"username\": \"cooluser\",\n    \"password\": \"YipohBe7quoohuev\"\n}");
Request request = new Request.Builder()
  .url("https://openapi.surreal-ai.com/v1/auth/account.login")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
