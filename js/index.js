/*
 * @Author: 石吉文
 * @Date: 2024-06-11 20:01:33
 * @Description: 
 */

let modal = document.getElementById("myModal");
let btn = document.getElementById("submitBtn");
let input = document.getElementById("nameInput");
let img = document.querySelector('.bgimg')

btn.onclick = function () {
  var name = input.value;
  if (name === 'wangzhe') {
    modal.style.display = "none";
    img.style.display = "block";
  } else {
    alert("访问密码错误");
    modal.style.display = "block";
    img.style.display = "none";
  }
}
