$(window).on('load',function(){
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });


  let listVideo = document.querySelectorAll(".video-list .vid");
  let mainVideo = document.querySelector(".main-video video");
  let title = document.querySelector(".main-video .title");
  
  listVideo.forEach(video => {
    video.onclick = () => {
      listVideo.forEach(vid => vid.classList.remove("active"));
      video.classList.add("active");
      if (video.classList.contains("active")) {
        let srs = video.children[0].getAttribute("src");
        mainVideo.src = srs;
        let text = video.children[1].innerHTML;
        title.innerHTML = text;
      }
    };
  });