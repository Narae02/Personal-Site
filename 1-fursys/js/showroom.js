$(document).ready(
  function(){
    $("#showroom ul.list li:nth-child(1) a").addClass("srbg");
    //addClass(); 클래스를 붙여라
    $("#showroom ul.list li a").click(
      function(){
        $(this).addClass("srbg"); //this란 이벤트(클릭)가 발생한 대상을 의미
        $("#showroom ul.list li a").not(this).removeClass("srbg");
        //not() ~가 아닌
        return false; //a태그에 의한 새로고침이 안되게 함
      }
    );
  }
);


//이미지부분
$(document).ready(function () {
  // 초기 상태: 모든 detail 숨김
  $(".detail li").hide();
  //첫번째 이미지만 나타내기
  $(".detail li").eq(0).show();

  // .list의 각 항목 클릭 이벤트
  $(".list li a").click(function (e) {
      e.preventDefault(); // 기본 클릭 동작 방지

      var index = $(this).parent().index(); // 클릭한 li의 인덱스 가져오기
      $(".detail li").hide(); // 모든 detail 숨기기
      $(".detail li").eq(index).fadeIn(); // 해당 인덱스의 detail 표시
  });
});