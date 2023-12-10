function getValue(id) {
    return document.getElementById(id).value.trim();
}

function validate(frm) {
    var tendangnhap = getValue('tendangnhap');
    if (tendangnhap.length > 20 || tendangnhap.length < 3) {
        alert("Tên đăng nhập ít nhất có 3 ký tự!");
        return false;
    }
    var email = getValue('inputEmail');
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailformat.test(email) == false) {
        alert("Email không hợp lệ!");
        return false;
    }
    
    var psw = getValue('inputPassword');
    if ( psw.length > 20 || psw.length < 6) {
        alert("Mật khẩu phải ít nhất 6 ký tự!");
        return false;
    }
    var psw2 = getValue('inputPassword1');
    if (psw.localeCompare(psw2) != 0) {
        alert("Mật khẩu nhập lại không đúng!");
        return false;
    }
    if (document.getElementById("number1").checked === false && document.getElementById("number2").checked === false && document.getElementById("number3").checked === false) {
        alert("Vui lòng chọn giới tính!")
        return false;
    }
    var date = getValue('inputDate');
    if (date.length != 10) {
        alert("Nhập không đúng format ngày sinh");
        return false;
    }
    var phonenumber = getValue('inputPhone');
    if (phonenumber.length > 12 || phonenumber.length < 10) {
        alert("Tên đăng nhập ít nhất có 3 ký tự!");
        return false;
    }
    var addressinput = getValue('inputAddress');
    if (addressinput.length > 70 || addressinput.length < 0) {
        alert("Vui lòng nhập địa chỉ");
        return false;
    }



    return true;
}

function frmValidate(frm) {
    if (validate(frm) == true) {
        return true;
    } else return false;
}
function store(){
    var inputUsername= document.getElementById("tendangnhap");
    sessionStorage.setItem("username", inputUsername.value);
    var inputEmail= document.getElementById("inputEmail");
    sessionStorage.setItem("email", inputEmail.value);
    var inputPhone= document.getElementById("inputPhone");
    sessionStorage.setItem("phone", inputPhone.value);
    var inputPassword= document.getElementById("inputPassword");
    sessionStorage.setItem("pws", inputPassword.value);
}
