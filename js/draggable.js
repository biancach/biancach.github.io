//TAKEN FROM https://www.w3schools.com/howto/howto_js_draggable.asp

var selected_element;
var rotate_dict = {};
var degree_increment = 3;

window.addEventListener('keydown', function(e) { key_press(e); });

function key_press(e) {
  // alert(e.keyCode);
  switch(e.keyCode) {
    case 37: //left key
      //maybe translate left in the future
      break;
    case 38: //up key
    //maybe translate up in the future
      break;
    case 39: //right key
    //maybe translate right in the future
      break;
    case 40: //down key
    //maybe translate down in the future
      break;
    case 88: //x key
      if (selected_element) {
        rotate_selected_element("right");
      }
      break;
    case 90: //z key
      if (selected_element) {
        rotate_selected_element("left");
      }
      break;
    default:
      // do nothing
  }
}

function set_selected(id) {
  if (selected_element) {
    selected_element.classList.toggle("selected");
  }
  selected_element = document.getElementById(id);
  selected_element.classList.toggle("selected");
}

function rotate_selected_element(direction) {
  rotate_dict[selected_element.id] += (direction == 'right' ? degree_increment : (direction == 'left' ? -degree_increment : 0));
  selected_element.style.transform = 'rotate('+rotate_dict[selected_element.id]+'deg)';
}

//Make the DIV element draggagle:
var draggable_elements = document.getElementsByClassName("draggable");
for (var i = 0; i < draggable_elements.length; i++) {
  rotate_dict[draggable_elements[i].id] = 0;
  dragElement(draggable_elements[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function clear_selected_element() {
  selected_element.classList.toggle("selected");
  selected_element = null;
}

document.getElementById('puzzle_container').onclick = clear_selected_element;

//TODO: this does allow dragging but theres no rotating without a keyboard and it disables clicking, so i'm getting rid of it for now
// function touchHandler(event) {
//     var touch = event.changedTouches[0];
//
//     var simulatedEvent = document.createEvent("MouseEvent");
//         simulatedEvent.initMouseEvent({
//         touchstart: "mousedown",
//         touchmove: "mousemove",
//         touchend: "mouseup"
//     }[event.type], true, true, window, 1,
//         touch.screenX, touch.screenY,
//         touch.clientX, touch.clientY, false,
//         false, false, false, 0, null);
//
//     touch.target.dispatchEvent(simulatedEvent);
//     event.preventDefault();
// }
//
// function init() {
//     document.addEventListener("touchstart", touchHandler, true);
//     document.addEventListener("touchmove", touchHandler, true);
//     document.addEventListener("touchend", touchHandler, true);
//     document.addEventListener("touchcancel", touchHandler, true);
// }
//
// init();
