function getValue(id) {
    return document.getElementById(id).value.trim();
}

function validate(frm) {
    var email = getValue('email-address');
    var emailss = sessionStorage.getItem("email");
    if(email.localeCompare(emailss) != 0){
        // alert("Email không hợp lệ!");
        return false;
    }

    // var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if (emailformat.test(email) == false) {
    //     alert("Email không hợp lệ!");
    //     return false;
    // }
    
    var psw = getValue('password-sign-in');
    var pwsss = sessionStorage.getItem("pws");
    if(psw.localeCompare(pwsss) != 0){
        // alert("Mật khẩu phải ít nhất 6 ký tự!");
        return false;
    }
    // if ( psw.length > 20 || psw.length < 6) {
    //     alert("Mật khẩu phải ít nhất 6 ký tự!");
    //     return false;
    // }
    return true;
}

function frmValidate(frm) {
    if (validate(frm) == true) {
        return true;
    } else{
        alert("Email hoặc Mật Khẩu không trùng khớp với lúc đăng ký")
        return false;
    };
}