window.onload = function () {
    var btn = document.getElementById("all");
    btn.onclick = function () {
        var flag = this.checked;
        var items = document.getElementsByName("ckbx");
        for (var i = 0; i < items.length; i++) {
            items[i].checked = flag;//将所有item的状态设为全选按钮的状态
        }
    }
}