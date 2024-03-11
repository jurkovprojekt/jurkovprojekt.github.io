function like() {
  var pantryid = "42536e6a-f14f-498a-9180-37dcb088251d";
  var request = new XMLHttpRequest();
  var apiUrl = 'https://getpantry.cloud/apiv1/pantry/42536e6a-f14f-498a-9180-37dcb088251d/basket/likes';

  request.open("GET", apiUrl, true);
  var responseData
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      responseData = JSON.parse(request.responseText);
      console.log(responseData);
    }
  };

  request.send();

  var xhttppost = new XMLHttpRequest()
  var url = 'https://getpantry.cloud/apiv1/pantry/' + pantryid + '/basket/likes';
  var params = JSON.stringify({ "likes": 12 });

  xhttppost.open("POST", url, true);
  xhttppost.setRequestHeader("Content-type", "application/json");

  xhttppost.send(params);
}