function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username, password);

  var data = JSON.parse(user);
  if(user == null){ 
    alert("You do not input username or password");
    return false;
  } else if(username == data.username && password == data.password) {
    alert("Đăng nhập thành công !");
    window.location.href="/pages/homepage.html";
    return true;
  } else {
    alert("Username hoặc mật khẩu không đúng. Vui lòng nhập lại!");
    return false;
  }
}