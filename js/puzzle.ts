
var all_puzzle_pieces: PuzzlePiece[] = [];

function make_outline() {
  //build object
  let outline: PuzzlePiece = new PuzzlePiece("outline", [100, 100]);
}

class PuzzlePiece {
  static id_counter: number = 0;
  id: number;
  name: string;
  position: number[]; //x, y
  rotation: number;
  flip: boolean;

  constructor(name: string, position: number[]) {
    this.id = PuzzlePiece.id_counter;
    PuzzlePiece.id_counter += 1;

    this.name = name;
    this.position = position;
    this.rotation = 0;
    this.flip = false;

    all_puzzle_pieces.push(this);
  }

  draw() {
    switch(this.name) {
      case "outline":
        this.draw_outline(this.position, this.rotation, this.flip);
        break;
      case "":
        break;
      default:
        console.log("error: invalid shape name");
    }
  }

  draw_outline(position: number[], rotation: number, flip: boolean) {
    //TODO draw outline
  }

  draw_t_block(position: number[], rotation: number, flip: boolean) {
    //TODO draw t block
  }

  draw_w_block(position: number[], rotation: number, flip: boolean) {
    //TODO draw t block
  }

  draw_f_block(position: number[], rotation: number, flip: boolean) {
    //TODO draw t block
  }

  draw_y_block(position: number[], rotation: number, flip: boolean) {
    //TODO draw t block
  }
}
