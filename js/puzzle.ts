var scale_factor = 7.56;

var all_puzzle_piece_shapes: string[] = [
  "0,0 10,0 10,10 30,10 30,20 10,20 10,30 0,30",
  "0,0 10,0 10,10 20,10 20,20 10,20 10,40 0,40",
  "0,0 10,0 10,10 20,10 20,20 30,20 30,30 10,30 10,20 0,20",
  "0,0 10,0 10,10 30,10 30,20 20,20 20,30 10,30 10,20 0,20",
  "0,0 10,0 10,10 30,10 30,20 20,20 20,30 10,30 10,20 0,20",
];

var all_puzzle_piece_colors: string[] = [
  "lime",
  "blue",
  "green",
  "red",
  "pink"
];

function make_outline() {
  document.write('<div><svg width="500" height="500">');
  document.write('<rect x="20" y="10" width="450" height="450" style="fill:white;stroke:black;stroke-width:5;opacity:1" />');
  document.write('</svg></div>')

  /* <div>
    <svg width="500" height="500">
      <rect x="20" y="10" width="450" height="450"
      style="fill:white;stroke:black;stroke-width:5;opacity:1" />
    </svg>
  </div> */
}



function make_pieces() {
  /* <div id="block_0" class="draggable" onclick="set_selected('block_0')">
    <svg width="120" height="120">
      <polygon points="0,0 40,0 40,40 120,40 120,80 40,80 40,120 0,120"
      style="fill:lime;" />
    </svg>
  </div>  */
  for (var i = 0; i < all_puzzle_piece_shapes.length; i++) {
    document.write('<div id="block_' + i + '" class="draggable" onclick="set_selected(\'block_' + i + '\')">');
    var scaled_coords = get_scaled_coords(all_puzzle_piece_shapes[i]);
    var scaled_width = get_scaled_width(scaled_coords);
    var scaled_height = get_scaled_height(scaled_coords);
    document.write('<svg width="' + scaled_width + '" height="' + scaled_height + '"> <polygon points="' + scaled_coords + '" style="fill:' + all_puzzle_piece_colors[i] + ';" /> </svg> </div>');
  }
}

function get_scaled_width(points) {
  var points_to_coords = points.split(" ");
  var max_x = 0;
  for (var i = 0; i < points_to_coords.length; i++) {
    var coords = points_to_coords[i].split(",");
    var x = parseInt(coords[0]);
    if (x > max_x) {
      max_x = x;
    }
  }
  return max_x;
}

function get_scaled_height(points) {
  var points_to_coords = points.split(" ");
  var max_y = 0;
  for (var i = 0; i < points_to_coords.length; i++) {
    var coords = points_to_coords[i].split(",");
    var y = parseInt(coords[1]);
    if (y > max_y) {
      max_y = y;
    }
  }
  return max_y;
}

function get_scaled_coords(points: string) {
  var points_to_coords = points.split(" ");
  var points_to_return = '';
  for (var i = 0; i < points_to_coords.length; i++) {
    var coords = points_to_coords[i].split(",");
    var x = parseInt(coords[0]), y = parseInt(coords[1]);
    if (i != 0) {
      points_to_return += " ";
    }
    points_to_return += x * scale_factor + "," + y * scale_factor;
  }
  return points_to_return;
}
