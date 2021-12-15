function getValue(id) {
    return document.getElementById(id).value.trim();
}

function validate(frm) {
    var email = getValue('email-address');
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailformat.test(email) == false) {
        alert("Email không hợp lệ!");
        return false;
    }
    
    var psw = getValue('password-sign-in');
    if ( psw.length > 20 || psw.length < 6) {
        alert("Mật khẩu phải ít nhất 6 ký tự!");
        return false;
    }
    return true;
}

function frmValidate(frm) {
    if (validate(frm) == true) {
        return true;
    } else return false;
}