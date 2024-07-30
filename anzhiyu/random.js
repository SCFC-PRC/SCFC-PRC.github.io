var posts=["2024/07/30/hello-world/","2024/07/30/new/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };