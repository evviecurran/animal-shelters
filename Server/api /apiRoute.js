// api info 
// import com.squareup.okhttp.*;

// class Main {
//     public static void main(String[] args) {
//         OkHttpClient client = new OkHttpClient().newBuilder().build();
//         MediaType mediaType = MediaType.parse("application/json");
//         RequestBody body = RequestBody.create(mediaType, "{\n    \"collection\":\"Fur-ever\",\n    \"database\":\"Help-furry-friends\",\n    \"dataSource\":\"Cluster1\",\n    \"projection\": {\"_id\": 1}\n\n}");
//         Request request = new Request.Builder()
//           .url("https://us-west-2.aws.data.mongodb-api.com/app/data-ryovq/endpoint/data/v1/action/findOne")
//           .method("POST", body)
//           .addHeader("Content-Type", "application/json")
//           .addHeader("Access-Control-Request-Headers", "*")
//           .addHeader("api-key", "CYxE1vEPDTEBdRBWckBh9shqzFYf8TXlrpFRBpu5UKOyea4NgZBCX5FJgeaDOoVo")
//           .build();
//         Response response = client.newCall(request).execute();
//     }
// }
