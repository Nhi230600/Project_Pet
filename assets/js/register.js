function register(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var name = document.getElementById("name").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var password = document.getElementById("password").value;
  var repeatpassword = document.getElementById("repeatpassword").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var user = {
    username : username,
    name : name,
    phonenumber : phonenumber,
    password : password,
    repeatpassword : repeatpassword,
    address : address,
    email : email,
  }
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  if(username == ""){
    alert("Vui lòng nhập username");
    return false;
  } else if(name == ""){
    alert("Vui lòng nhập họ tên");
    return false;
  } else if(phonenumber == ""){
    alert("Vui lòng nhập số điện thoại để đăng ký");
    return false;
  } else if(password == ""){
    alert("Vui lòng nhập mật khẩu");
    return false;
  } else if(repeatpassword == ""){
    alert("Vui lòng xác nhận lại mật khẩu đã đặt");
    return false;
  } else if(address == ""){
    alert("Vui lòng nhập địa chỉ của bạn");
    return false;
  } else if(email == ""){
    alert("Vui lòng nhập email");
    return false;
  }
  alert("Đăng ký thành công!");
  return true;
}



