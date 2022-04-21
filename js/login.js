// obj = document.getElementById('container');
// cWidth = window.innerWidth;
// cHeight = window.innerHeight;
// obj.style.marginTop = (cHeight - 300) / 2 + "px";
// window.onresize = function () {
//     cWidth = window.innerWidth;
//     cHeight = window.innerHeight;
//     obj.style.marginTop = (cHeight - 300) / 2 + "px";
// }
var unameyz = document.getElementById('unameyz')
var upswdyz = document.getElementById('upswdyz')
var username = document.getElementById('uname')
var password = document.getElementById('upass')
var uflag, pflag = false
username.onblur = function () {
    if (this.value.length == 0) {
        unameyz.innerHTML = '请输入用户名'
        uflag = false
    } else {
        unameyz.innerHTML = '&nbsp;'
        uflag = true
    }
}
password.onblur = function () {
    if (this.value.length == 0) {
        upswdyz.innerHTML = '请输入密码'
        pflag = false
    } else {
        upswdyz.innerHTML = '&nbsp;'
        pflag = true
    }
}
var inputs = document.getElementById('inputs')
inputs.onclick = function () {
    if (uflag && pflag) {
        location.href = 'index.html'
    } else {
        alert('请输入正确的用户名或密码')
    }
}
