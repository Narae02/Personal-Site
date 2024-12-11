$(document).ready(function(){

  var winw=window.innerWidth; // 창전체 너비(스크롤바포함)
  var docw=document.documentElement.clientWidth;//문서의 너비
  // var winw=$(window).innerWidth(); // 창전체 너비(스크롤바포함)
  // var docw=$("html").width();//문서의 너비
  var scrw=winw-docw;

  $("header nav .enb li.ham").click(
    function(){
      $("#popup").remove();
      $("header").before("<div id='popup'></div>");
      $("#popup").hide().slideDown(600,"linear",function(){
        $(this).fadeTo(500,1);
      });
      // 제목 복.클래스 지정
      $("header h1").clone().appendTo("div#popup");
      $("div#popup h1").addClass("changebg").css({"position":"relative","z-index":"3"});

      // 대메뉴 복제.이동
      $("header ul.gnb").clone().appendTo("div#popup");

      // 대메뉴부모생성 ,대메뉴별 배경이미지용 div생성배치
      $("#popup ul.gnb").wrap("<div class='popopgnbwrap'></div>");
      $("#popup div.popopgnbwrap").append("<div class='gnbbg'></div>");

      // 햄버거 복제.디동.클래스 지정
      $("header ul.enb li.ham").clone().appendTo("div#popup").wrap("<ul class='wham'></ul>");
      $("div#popup .ham").addClass("x");

      // 햄버거 클릭시 흔들리지 않게 처리
      $("body").css({"overflow-y":"hidden","padding-right":scrw}).removeClass("bodybg");
      $("div.www").addClass("bodybg2");
      $("header").css({"padding-right":scrw,"box-sizing":"border-box"});

      $("#popup .ham").click(function(){
        $("#popup").animate({"opacity":0},1000,function(){
          $("#popup").remove();

          // search영역 배경보이게
          $(".www").removeClass("bodybg2");
          $("body").addClass("bodybg");
        });

        // $("div#popup .ham").removeClass("x");
        $("div#popup .ham").hide();
        $("body").css({"overflow-y":"auto","padding-right":0});
        $("header").css({"padding-right":0});
      });

      // 팝업메뉴오버시 배경이미지 지정
      var cbg;
      $("#popup ul.gnb>li").hover(
        function(){
          cbg=$(this).index()+1;
          $("#popup .gnbbg").css("background-image","url(img/bg_gnb_"+cbg+".jpg)");
        },
        function(){

        }
      );
        // 태블릿(반응형)일때 기타메뉴(enb)를 이동
        if($(window).width()<1201 && $(window).width()>479){
          $("#popup .enb").remove();
          $(".enb").clone().insertAfter("#popup h1"); //enb를 복사해서 h1뒤에 넣는다 / after는 앞에있는 대상한테 추가 vs insertAfter는 앞에있는 대상한테 추가
          $("#popup .enb li.ham").remove();
        }
        

      return false;
    }
  );

  // 스크롤시 header에 배경색지정
  var secTop=$("#search").offset().top;

  if($(window).scrollTop()>=secTop){
    $("header").addClass("header_bg");
    //스크롤하면 aside가 들어가게

    if($("aside").hasClass("asideMove")){
      $("aside").addClass("asideMoveBack");
    }else{

    }


  }else{
    $("header").removeClass("header_bg");
  }

  $(window).scroll(function(){
    if($(window).scrollTop()>=secTop){
      $("header").addClass("header_bg");

      //스크롤하면 aside가 들어가게

      if($("aside").hasClass("asideMove")){
        $("aside").addClass("asideMoveBack");
      }else{

      }


    }else{
      $("header").removeClass("header_bg");
    }
  });



});