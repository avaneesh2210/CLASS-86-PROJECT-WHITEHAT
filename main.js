var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (e.shiftKey == true && keyPress == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPress == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPress == '38') {
        up();
        console.log("up");
    }
    if (keyPress == '40') {
        down();
        console.log("down");
    }
    if (keyPress == '37') {
        left();
        console.log("left");
    }
    if (keyPress == '39') {
        right();
        console.log("right");
    }
    if (keyPress == '65') {
        new_image('captain_america_left_hand.png');
        console.log("A is pressed");
    }
    if (keyPress == '66') {
        new_image('hulk_face.png');
        console.log("B is pressed");
    }
    if (keyPress == '67') {
        new_image('hulk_left_hand.png');
        console.log("C is pressed");
    }
     if (keyPress == '68') {
        new_image('hulk_legs.png');
        console.log("D is pressed");
    }
    if (keyPress == '69') {
        new_image('hulk_right_hand.png');
        console.log("E is pressed");
    }
    if (keyPress == '70') {
        new_image('hulkd_body.png');
        console.log("F is pressed");
    }
}
