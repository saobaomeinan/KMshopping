function shoeTips(divId, tips) {
    var divs = document.getElementById(divId);
    divs.innerHTML = tips;
}
var flag_name, flag_pwd, flag_qpwd, flag_mail, flag_phone = false
// 校验用户名
function hint() {
    var value = document.getElementById("value").value;
    var hint = document.getElementById("unameyz");
    if (value.length < 6) {
        hint.innerHTML = "用户名太短";
        flag_name = false;
    } else {
        hint.innerHTML = "&nbsp";
        flag_name = true;
    }
}
function hint_hide() {
    var hint = document.getElementById("unameyz");
    if (flag_name) {
        hint.innerHTML = "&nbsp;";
    }
}
// 校验密码
function checkPass() {
    var value = document.getElementById("pass_value").value;
    var hint = document.getElementById("upswdyz");
    if (value.length < 6) {
        hint.innerHTML = "密码太短";
        flag_pwd = false;
    } else {
        hint.innerHTML = "&nbsp;";
        flag_pwd = true;
    }
}
function pass_hide() {
    var hint = document.getElementById("upswdyz");
    if (flag_pwd) {
        hint.innerHTML = "&nbsp;";
    }
}
// 确认密码的校验
function checkPassPass() {
    var papavalue = document.getElementById("passpass_value").value;
    var value = document.getElementById("pass_value").value;
    var papahint = document.getElementById("agpwdyz");
    if (papavalue != value) {
        papahint.innerHTML = "两次密码不一致";
        flag_qpwd = false;
    } else {
        papahint.innerHTML = "&nbsp;";
        flag_qpwd = true;
    }
}
function passpass_hide() {
    var papahint = document.getElementById("agpwdyz");
    if (flag_qpwd) {
        papahint.innerHTML = "&nbsp;";
    }
}
// 校验邮箱
function checkEmail(strEmail) {
    var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if (emailReg.test(strEmail)) {
        return true;
    }
    else {
        return false;
    }
};
function emailCheck() {
    var emailValue = document.getElementById("email").value;
    var email_hint = document.getElementById("umailyz");
    var flag1 = checkEmail(emailValue);
    if (flag1) {
        email_hint.innerHTML = "&nbsp;";
        flag_mail = true;
    } else {
        email_hint.innerHTML = "邮箱格式错误";
        flag_mail = false;
    }
}
function emailHide() {
    var email_hint = document.getElementById("umailyz");
    if (flag_mail) {
        email_hint.innerHTML = "&nbsp;";
    }
}
// 校验手机号
function checkMobile(strMobile) {
    var regu = /^[1][345678][0-9]{9}$/;
    var re = new RegExp(regu);
    if (re.test(strMobile)) {
        return true;
    }
    else {
        return false;
    }
};
function phoneCheck() {
    var phone = document.getElementById("phone").value;
    var phone_hint = document.getElementById("uphoneyz");
    var flag2 = checkMobile(phone);
    if (flag2) {
        phone_hint.innerHTML = "&nbsp;";
        flag_phone = true;
    } else {
        phone_hint.innerHTML = "手机号格式错误";
        flag_phone = false;
    }
}
function phoneHide() {
    var phone_hint = document.getElementById("uphoneyz");
    if (flag_phone) {
        phone_hint.innerHTML = "&nbsp;";
    }
}
var submits = document.getElementById('submits')
submits.onclick = function () {
    var flag = flag_name && flag_pwd && flag_qpwd && flag_mail && flag_phone;
    if (flag) {
        location.href = 'index.html'
    } else {
        alert('请输入正确的信息')
    }
}