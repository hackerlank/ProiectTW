$(document).ready(function () {$("#submit1").bind("click", function (event) {$.ajax({beforeSend:function (XMLHttpRequest) {$("#inprogress").fadeIn();}, data:$("#submit1").closest("form").serialize(), dataType:"html", succes:"$(\"#inprogress\").fadeOut();", success:function (data, textStatus) {$("#post").html(data);}, type:"post", url:"\/proiect\/Admin"});
return false;});
$("#link-93101620").bind("click", function (event) {$.ajax({url:"\/proiect\/Location\/addLocation"});
return false;});
$("#link-1007260376").bind("click", function (event) {$.ajax({url:"\/proiect\/Location\/addLocation"});
return false;});
$("#link-1257006546").bind("click", function (event) {$.ajax({url:"\/proiect\/Location\/addLocation"});
return false;});
$("#link-1596976348").bind("click", function (event) {$.ajax({url:"\/proiect\/Location\/addLocation"});
return false;});});