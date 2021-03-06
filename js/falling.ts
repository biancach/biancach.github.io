var interval, counter: number = 0, gravity=0.001, info: DOMRect, ground_info: DOMRect;
var ground: HTMLElement;

// gravity = 1; //remove when not testing

function elements_fall() {
  interval = setInterval(update_falling_elements, 10);
}

function stop_fall() {
  clearInterval(interval);
}

function step() {
  update_falling_elements();
}

function reset() {
  counter = 0;
  stop_fall();
  reset_falling_elements();
}

function reset_falling_elements() {
  var all_falling_elements: HTMLCollectionOf<Element> = document.getElementsByClassName("falls");
  // console.log(all_falling_elements);
  for (var i: number = 0; i < all_falling_elements.length; i++) {
    (<HTMLElement> all_falling_elements[i]).style.transform = "translate(0px, 0px)";
  }
}

function update_falling_elements() {
  counter += 1
  var all_falling_elements: HTMLCollectionOf<Element> = document.getElementsByClassName("falls");
  // console.log(all_falling_elements);
  for (var i: number = 0; i < all_falling_elements.length; i++) {
    move_down(<HTMLElement> all_falling_elements[i], counter);
  }
}

function move_down(element: HTMLElement, counter: number) {
  info = element.getBoundingClientRect();
  ground_info = document.getElementById('ground').getBoundingClientRect();

  console.log("start: bottom is " + info.bottom + " ground is " + ground_info.top + " to add: " + ((counter * counter) * gravity))
  if (info.bottom + delta_acceleration(counter) > ground_info.top) {
    //do nothing
    element.style.transform = "translate(0px, " + acceleration(counter) +   + "px)";
  } if (info.bottom > ground_info.top) {
    //do nothing
  } else {
    element.style.transform = "translate(0px, " + acceleration(counter) + "px)";
  }

  console.log("end: bottom is " + info.bottom + " ground is " + ground_info.top)
  // element.style.transform = "translate(0px, 0px)";
  // element.style.transform = "translateY(" + (7 * counter) + ")";
}

function get_vertical_displacement(time: number, acceleration: number, velocity: number) {

}

function delta_acceleration(counter) {
  return acceleration(counter) - acceleration(counter - 1);
}

function acceleration(counter) {
  return counter * counter * gravity;
}
