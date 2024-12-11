// .fadelist ul을 생성,위치하기
$(document).ready(function(){

  // 타이틀애니 리스트 생성,배치
  $("#title .wrap").append("<ul class='fadelist'><li></li><li></li><li></li></ul>");
  $("ul.fadelist li").html("<span></span><span></span><span></span><span></span>");//span추가
  $("body").prepend("<div class='tbodybg'></div>");
     //타원외곽선 마크업태그 추가
  $("ul.fadelist li").append("<div class='wrapper'><div class='left'><i class='rot'></i></div><div class='right'><i class='rot'></i></div>");


  //fade애니메이션
  var tn=0;
  $(".fadelist li:eq("+tn+")").addClass("cu_list"); //첫번째 fade리스트 표시

  //fadelist외곽선테두리애니
  $(".fadelist li:eq("+tn+")").addClass("outAni");

  //원형라인애니메이션
  $(".fadelist li:eq("+tn+") .wrapper").addClass("circlerot");

  $("div.tbodybg").css("background-image","url(img/bodybg_"+tn+".jpg)").hide().fadeIn(1500).addClass("bgbig");

  // 반복실행 함수
  function titleFade(){
    console.log(tn);
    if(tn<2){
      $("ul.fade li:eq("+tn+")").fadeOut(500,function(){
        $("ul.fade li:eq("+tn+")").next().removeClass("hide").hide().fadeIn(1500).addClass("bgbig");
        $(".fadelist li:eq("+tn+")").removeClass("outAni"); //앞라인그려지는 애니삭제
        $(".fadelist li:eq("+tn+") .wrapper").removeClass("circlerot");//원외곽선그려지는 애니
        tn++;
        $(".fadelist li:eq("+tn+")").prev().removeClass("cu_list");
        $(".fadelist li:eq("+tn+")").addClass("cu_list");
        $(".fadelist li:eq("+tn+")").addClass("outAni"); //라인그려지는 애니
        $(".fadelist li:eq("+tn+") .wrapper").addClass("circlerot");//원외곽선그려지는 애니
        $("div.tbodybg").remove();
        $("body").prepend("<div class='tbodybg'></div>");
        $("div.tbodybg").css("background-image","url(img/bodybg_"+tn+".jpg)").hide().fadeIn(1500).addClass("bgbig");

      });

    }else if(tn==2) {
      $("ul.fade li:eq("+tn+")").fadeOut(500,function(){
        $(".fadelist li:eq("+tn+")").removeClass("cu_list");
        $(".fadelist li:eq("+tn+")").removeClass("outAni"); //앞라인그려지는 애니삭제
        $(".fadelist li:eq("+tn+") .wrapper").removeClass("circlerot");//원외곽선그려지는 애니
        tn=0;
        $("ul.fade li:eq("+tn+")").fadeIn(1500);
        $(".fadelist li:eq("+tn+")").addClass("outAni"); //라인그려지는 애니
        $(".fadelist li:eq("+tn+")").addClass("cu_list");
        $(".fadelist li:eq("+tn+") .wrapper").addClass("circlerot");//원외곽선그려지는 애니
        $("div.tbodybg").css("background-image","url(img/bodybg_"+tn+".jpg)").hide().fadeIn(1500).addClass("bgbig");
        // $("body").css("background-image","url(img/bodybg_"+tn+".jpg)");

      });

    }
  }
  // var sec=3000;
  var loopTitle=setInterval(titleFade,3000);

  // $("ul.fadelist li,ul.fade a").hover(
  //   function(){
  //    clearInterval(loopTitle);
  //   }
  //   ,
  //   function(){
  //    loopTitle=setInterval(titleFade,3000);
  //   }
  // );
  function titleFadeClick(){
    $(".fadelist li:eq("+tn+")").addClass("cu_list");
    $(".fadelist li:eq("+tn+")").siblings().removeClass("cu_list");

    $(".fadelist li:eq("+tn+")").addClass("outAni"); //라인그려지는 애니
    $(".fadelist li:eq("+tn+")").siblings().removeClass("outAni");

    $(".fadelist li:eq("+tn+") .wrapper").addClass("circlerot");//원외곽선그려지는 애니
    $(".fadelist li:eq("+tn+") .wrapper").parent().siblings().children(".wrapper").removeClass("circlerot")

    $("div.tbodybg").remove();
    $("body").prepend("<div class='tbodybg'></div>");
    $("div.tbodybg").css("background-image","url(img/bodybg_"+tn+".jpg)").hide().fadeIn(1500).addClass("bgbig");
  }
  // fadelist클릭시 타이틀애니
  $("ul.fadelist li").click(function(){
    clearInterval(loopTitle);
    tn=$(this).index();
    // alert(tn);
    titleFadeClick();
    setTimeout(function(){
      loopTitle=setInterval(titleFade,3000);
    },6000);
  });
  //fadelist에서 마우스 벗어나면 다시 자동플레이


});
