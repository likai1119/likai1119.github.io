/*
 * @Author: 石吉文
 * @Date: 2024-06-11 20:01:33
 * @Description: 
 */

//打开页面时候弹出输入框输入密码，正确进入页面，点击取消继续弹出输入框

checkPassword()

function checkPassword() {
  var password = prompt("请输入密码：");
  if (password === "123456") {
    // 密码正确，进入页面
    document.getElementById("content").style.display = "block";
  } else {
    // 密码错误，继续弹出输入框
    checkPassword();
  }
}
