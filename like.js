var pantryid = "42536e6a-f14f-498a-9180-37dcb088251d";
var xhttp = new XMLHttpRequest();
var url = 'https://getpantry.cloud/apiv1/pantry/'+ pantryid+'/basket/likes';
var params = JSON.stringify({ "key": "value" });

xhttp.open("POST", url, true);
xhttp.setRequestHeader("Content-type", "application/json");

xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    console.log(xhttp.responseText);
  }
};

xhttp.send(params);