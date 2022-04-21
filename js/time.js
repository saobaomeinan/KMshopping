window.onload = function () {
    window.requestAnimationFrame(getDate);
}
function getDate() {
    window.setTimeout(function () {
        window.requestAnimationFrame(getDate)
    }, 1000 / 2)
    var date = new Date();
    var year = date.getFullYear();  //获取当前年份
    var month = date.getMonth() + 1;  //获取当前月份
    var day = date.getDate();       //获取当前月份
    var week = date.getDay();     //获取当前星期
    switch (week) {    //星期的格式
        case 0:
            week = "星期日";
            break;
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        default:
            week = "星期六";
    }
    var hour = date.getHours();        //获取当前小时
    var minute = date.getMinutes();    //获取当前分钟
    var second = date.getSeconds();    //获取当前秒

    if (month < 10) month = "0" + month;     //文本小于10的时候在文本前加上0
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    var yearMona = document.getElementById("yearMonth");    //年月加入样式
    var yearMon = year + "年" + month + "月";
    yearMona.innerHTML = yearMon;

    var day1 = document.getElementById("days");      //日加入样式
    day1.innerHTML = day;

    var week1 = document.getElementById("weeks");    //星期加入样式
    week1.innerHTML = week;

    var time1 = document.getElementById("times");    //时分秒加入样式
    var time = hour + ":" + minute + ":" + second;
    time1.innerHTML = time;
}