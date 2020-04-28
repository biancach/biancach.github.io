var interval, counter: number = 0;

function elements_fall() {
  interval = setInterval(update_falling_elements, 100);
}

function stop_fall() {
  clearInterval(interval);
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
  var info = element.getBoundingClientRect();
  console.log(info);
  element.style.transform = "translate(0px, " + counter + "px)";
  // element.style.transform = "translateY(" + (7 * counter) + ")";
}
