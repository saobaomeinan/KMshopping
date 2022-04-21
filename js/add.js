window.onload = function () {
    //获取所有+按钮
    var increment = document.getElementsByClassName("plus");
    for (var i = 0; i < increment.length; i++) {
        increment[i].index = i;
        increment[i].onclick = function () {
            var flag = this.index;
            var q = document.getElementsByClassName("itxt")[flag];
            var newvalue = parseInt(q.value) + 1;
            q.setAttribute('value', newvalue);
        }
    }
    //获取所有-按钮
    var decrement = document.getElementsByClassName('mins');
    for (var j = 0; j < decrement.length; j++) {
        decrement[j].index = j;
        decrement[j].onclick = function () {
            var flag = this.index;
            var q = document.getElementsByClassName("itxt")[flag];
            if (parseInt(q.value) > 1) {
                var newvalue = parseInt(q.value) - 1;
                q.setAttribute('value', newvalue);
            }
        }
    }
}