let count = 0;
const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
function cookieClicker() {
  count++;
  clicker.textContent = count;
  if (count % 2 == 0) {
    image.width = 100;
  } else {
    image.width = 200;
  }
}
image.onclick = cookieClicker;
   