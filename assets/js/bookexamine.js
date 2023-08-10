function bookexamine(e){
  event.preventDefault();
  var inputStatus = document.getElementById("inputStatus").value;
  var inputTime = document.getElementById("inputTime").value;
  var inputName = document.getElementById("inputName").value;
  var inputSpecies = document.getElementById("inputSpecies").value;
  var inputGiong = document.getElementById("inputGiong").value;
  var inputNote = document.getElementById("inputNote").value;

  var book = {
    inputStatus : inputStatus,
    inputTime : inputTime,
    inputName : inputName,
    inputSpecies : inputSpecies,
    inputGiong : inputGiong,
    inputNote : inputNote,
  }

  var json = JSON.stringify(book);
  localStorage.setItem(inputStatus, json);
  if(inputStatus == ""){
    alert("Vui lòng nhập tình trạng bệnh lý");
    return false;
  } else if(inputTime == ""){
    alert("Vui lòng nhập thời gian hẹn khám");
    return false;
  } else if(inputName == ""){
    alert("Vui lòng nhập tên thú cưng");
    return false;
  } else if(inputSpecies == ""){
    alert("Thú cưng của mình là chó hay mèo bạn ha?");
    return false;
  } else if(inputGiong == ""){
    alert("Pet nhà mình thuộc giống gì ạ ?");
    return false;
  }
  // } else if(inputNote == ""){
  //   alert("Nếu bạn có ghi chú gì hãy nhập vào đây nhé !");
  //   return false;
  // }
  alert("Đăng ký thành công!");
  return true;
}