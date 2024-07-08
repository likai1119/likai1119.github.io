/*
 * @Author: 石吉文
 * @Date: 2024-06-11 20:01:33
 * @Description: 
 */

let modal = document.getElementById("myModal");
let btn = document.getElementById("submitBtn");
let input = document.getElementById("nameInput");
// let img = document.querySelector('.bgimg')
// let headert = document.querySelector('.headert')
// let headertop = document.querySelector('.header-top')

// btn.onclick = function () {
//   var name = input.value;
//   if (name === 'wangzhe') {
//     modal.style.display = "none";
//     img.style.display = "block";
//   } else {
//     alert("访问密码错误");
//     modal.style.display = "block";
//     img.style.display = "none";
//   }
// }
// headert.onclick = function () {
//   console.log(headertop);
//   headertop.style.display = 'none'
// }


document.addEventListener('DOMContentLoaded', function () {
  let headertop = document.querySelector('.header-top')
  let headert = document.querySelector('.headert')



  // 监听关闭按钮点击事件
  headert.addEventListener('click', function () {
    headertop.style.opacity = '0';
  });

  // 如果没有点击关闭按钮，在3秒后自动隐藏图片
  setTimeout(function () {
    if (headertop.style.opacity !== '0') {
      headertop.style.opacity = '0';
    }
  }, 3000);
});