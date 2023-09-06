function getValue(id) {
    return document.getElementById(id).value.trim();
}

function validate(frm) {
    var name = getValue('name');
    if (name.length > 20 || name.length < 3) {
        alert("Tên đăng nhập ít nhất có 3 ký tự!");
        return false;
    }
    var phonenumber = getValue('phonenumber');
    if (phonenumber.length > 12 || phonenumber.length < 10) {
        alert("Tên đăng nhập ít nhất có 3 ký tự!");
        return false;
    }
    var addressinput = getValue('address');
    if (addressinput.length > 70 || addressinput.length < 0) {
        alert("Vui lòng nhập địa chỉ");
        return false;
    }
    var email = getValue('email');
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailformat.test(email) == false) {
        alert("Email không hợp lệ!");
        return false;
    }
    var content = getValue('content');
    if (content.length < 1) {
        alert("Không được bỏ trống phần ghi chú giao hàng!");
        return false;
    }
    return true;
}

function frmValidate(frm) {
    if (validate(frm) == true) {
        return true;
    } else return false;
}