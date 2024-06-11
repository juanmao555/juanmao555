    function validateForm(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        var nickname = document.getElementById("nickname").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;

        // 检查昵称是否为空
        if (nickname.trim() === "") {
            displayErrorMessage("nickname-error", "昵称不能为空");
            return;
        }

        // 检查账号是否为空
        if (username.trim() === "") {
            displayErrorMessage("username-error", "账号不能为空");
            return;
        }

        // 检查密码是否为空
        if (password.trim() === "") {
            displayErrorMessage("password-error", "密码不能为空");
            return;
        }

        // 检查确认密码是否与密码一致
        if (confirmPassword !== password) {
            displayErrorMessage("confirm-password-error", "确认密码与密码不一致");
            return;
        }

        // 检查邮箱格式是否正确
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!email.match(emailRegex)) {
            displayErrorMessage("email-error", "请输入正确的邮箱地址");
            return;
        }

        // 检查性别是否为空
        if (gender === "") {
            displayErrorMessage("gender-error", "请选择性别");
            return;
        }

        // 所有验证通过，跳转到登录页面
        window.location.href = "login.html";
    }

    function displayErrorMessage(elementId, message) {
        var errorElement = document.getElementById(elementId);
        errorElement.innerText = message;
    }