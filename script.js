$("#second").click(function () {//验证码点击事件
        sendyzm($("#second"));
});
  
var countdown = 60;
        
function setTime(obj) {
            $("#second").css('left', '63%');
            if (countdown == 0) {
                $("#second").css('pointer-events', 'initial');
                obj.prop('disabled', true);
                obj.text("获取验证码");
                countdown = 60;//60秒过后button上的文字初始化,计时器初始化;
                return;
            } else {
                $("#second").css('pointer-events', 'none');
                obj.prop('disabled', false);
                obj.text(countdown + "s后重新发送");
                countdown--;
            }
            setTimeout(function () { setTime(obj) }, 1000) //每1000毫秒执行一次
}
        
function sendyzm(obj) {
  var verificationCode = generateVerificationCode();
  alert("验证码为" + verificationCode)
    setTime(obj);
}

// if (countdown == 0) {

//   $("#popup").hide();

// }



function generateVerificationCode() {
    var code = "";
    for (var i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10);
    } 
    return code;
}


// // 实现验证码发送逻辑
// function sendyzm(obj) {
//     // 在这里实现与服务器交互，发送验证码给用户
//     // 成功发送后，调用 setTime(obj) 开始倒计时
//     // 例如：
//     // $.ajax({
//     //     url: 'send_verification_code.php', // 替换为实际的后端接口
//     //     success: function(response) {
//     //         // 处理成功发送逻辑
//     //         setTime(obj);
//     //     },
//     //     error: function() {
//     //         // 处理发送失败逻辑
//     //     }
//     // });
// }