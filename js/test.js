$(function () {

  $("#btn1").on("click",function () {

    var obj = '{"name":"tanaka", "age": 24, "gender":"male"}';

    var obj2 = $.parseJSON(obj);

    alert(obj2.name);


  });
});


