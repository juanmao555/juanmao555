
    function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "123" && password === "123") {
            window.location.href = "index.html";
        } else {
            alert("账号或密码不正确！");
            return false;
        }
    }