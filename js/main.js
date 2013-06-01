var mouseEventTypes = {
    touchstart : "mousedown",
    touchmove : "mousemove",
    touchend : "mouseup"
};

for (var originalType in mouseEventTypes) {
    document.addEventListener(originalType, function(originalEvent) {
        e = document.createEvent("MouseEvents");
        touch = originalEvent.changedTouches[0];
        e.initMouseEvent(mouseEventTypes[originalEvent.type], true, true,
                window, 0, touch.screenX, touch.screenY, touch.clientX,
                touch.clientY, touch.ctrlKey, touch.altKey, touch.shiftKey,
                touch.metaKey, 0, null);
        originalEvent.target.dispatchEvent(e);
    });
}

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