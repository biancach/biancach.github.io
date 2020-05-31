var all_puzzle_pieces = [];
function make_outline() {
    //build object
    var outline = new PuzzlePiece("outline", [100, 100]);
}
var PuzzlePiece = /** @class */ (function () {
    function PuzzlePiece(name, position) {
        this.id = PuzzlePiece.id_counter;
        PuzzlePiece.id_counter += 1;
        this.name = name;
        this.position = position;
        this.rotation = 0;
        this.flip = false;
        all_puzzle_pieces.push(this);
    }
    PuzzlePiece.prototype.draw = function () {
        switch (this.name) {
            case "outline":
                this.draw_outline(this.position, this.rotation, this.flip);
                break;
            case "":
                break;
            default:
                console.log("error: invalid shape name");
        }
    };
    PuzzlePiece.prototype.draw_outline = function (position, rotation, flip) {
        //TODO draw outline
    };
    PuzzlePiece.prototype.draw_t_block = function (position, rotation, flip) {
        //TODO draw t block
    };
    PuzzlePiece.prototype.draw_w_block = function (position, rotation, flip) {
        //TODO draw t block
    };
    PuzzlePiece.prototype.draw_f_block = function (position, rotation, flip) {
        //TODO draw t block
    };
    PuzzlePiece.prototype.draw_y_block = function (position, rotation, flip) {
        //TODO draw t block
    };
    PuzzlePiece.id_counter = 0;
    return PuzzlePiece;
}());
