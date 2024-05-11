
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    let button = document.getElementById('doLogin');

    // 为按钮添加点击事件监听器
    button.addEventListener('click', function() {
        // 假设这里有一个判断逻辑，例如检查输入框的值
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let username1 = username === "c";
        let password1 = password === "1";
        // 判断逻辑
        if (username1 && password1) {
            window.location.href = "E:/untitled/untitled/index/index.html";
        } else {
            alert("Invalid username or password");
            console.log("Invalid username or password");
        }
    });
});