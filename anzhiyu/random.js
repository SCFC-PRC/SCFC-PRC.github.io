var posts=["2024/07/30/hello-world/","2024/07/30/new/","2024/07/31/朋友居然被拷打了？！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };