var request = new XMLHttpRequest();
request.open('GET', `https://api.github.com/user/repos_id=20D8:7814:14D50BE:3575D35:5F65C3CB`, true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
  
    // Success!
    console.log(request.responseText);
    console.log("Success")
    console.log("test1")
  }
  else{console.log("faild")}
};
request.send();