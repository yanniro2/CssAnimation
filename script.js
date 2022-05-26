var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 30;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.height = pos + "px";
    }
  }
}
