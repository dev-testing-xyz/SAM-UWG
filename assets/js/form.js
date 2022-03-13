const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  

var formdata = new FormData();
formdata.append("name","this is name");
formdata.append("email","this is email");
formdata.append("message","this is message");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
};

fetch("https://www.actionforms.io/e/r/abid-ali-test", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
)

