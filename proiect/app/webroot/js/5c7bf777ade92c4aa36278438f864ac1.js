$(document).ready(function () {$("#submit-1154424196").bind("click", function (event) {$.ajax({beforeSend:function (XMLHttpRequest) {$("#inprogress").fadeIn();}, data:$("#submit-1154424196").closest("form").serialize(), dataType:"html", succes:"$(\"#inprogress\").fadeOut();", success:function (data, textStatus) {$("#post").html(data);}, type:"post", url:"\/proiect\/location\/selectie_camere"});
return false;});});