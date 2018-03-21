self.addEventListener('fetch', function (event) {
  if (event.request.url == "https://jsonplaceholder.typicode.com/posts/1") {
    console.log(event)
    var init = {
      status: 200,
      statusText: "OK",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var response = new Response('{text:"Güven kontrole mani degildir - B.Kahtalioglu"}', init);
    event.respondWith(response);
  }
});