$(document).ready(function () {$("#submit-873723563").bind("click", function (event) {$.ajax({beforeSend:function (XMLHttpRequest) {$("#inprogress").fadeIn();}, data:$("#submit-873723563").closest("form").serialize(), dataType:"html", succes:"$(\"#inprogress\").fadeOut();", success:function (data, textStatus) {$("#post").html(data);}, type:"post", url:"\/proiect\/location\/selectie_camere"});
return false;});});