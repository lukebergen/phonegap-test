var moving = null;
var offsetX = 0;
var offsetY = 0;

function mouseDown(e) {
  moving = e.target;
  l = moving.style.left;
  t = moving.style.top;
  if (l === "") {
    styles = document.defaultView.getComputedStyle(moving);
    l = styles.left;
    t = styles.top;
  }
  offsetX = parseFloat(l.split("px")[0]) - e.x;
  offsetY = parseFloat(t.split("px")[0]) - e.y;
}

function mouseUp(e) {
  moving = null;
}

function mouseMove(e) {
  if (moving !== null) {
    moving.style.top = e.y + offsetY;
    moving.style.left = e.x + offsetX;
  }
}