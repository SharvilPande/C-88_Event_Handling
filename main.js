canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_height = 30;
block_width = 30;

player_object = "";
block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top: player_y,
    left: player_x
    })
     
    canvas.add(player_object);

    })
}

function new_block(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
    block_object = Img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top: player_y,
        left: player_x
    })

    canvas.add(block_object);

    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed =='80') {
        console.log("shift and p pressed together");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("shift and m pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (keyPressed == '38') {
        up();
        console.log("up")
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '84') {
        new_block("trunk.jpg");
        console.log("t");
    }

    if (keyPressed == '68') {
        new_block("dark_green.png");
        console.log("d");
    }

    if (keyPressed == '76') {
        new_block("light_green.png");
        console.log("l");
    }

    if (keyPressed == '71') {
        new_block("ground.png");
        console.log("g");
    }

    if (keyPressed == '87') {
        new_block("wall.jpg");
        console.log("w");
    }

    if (keyPressed == '89') {
        new_block("yellow_wall.png");
        console.log("y");
    }

    if (keyPressed == '82') {
        new_block("roof.jpg");
        console.log("r");
    }

    if (keyPressed == '67') {
        new_block("cloud.jpg");
        console.log("c");
    }

    if (keyPressed == '85') {
        new_block("unique.png");
        console.log("u");
    }

}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("block height = " + block_height);
        console.log("When up key is pressed," , "X = " + player_x  + "," , "Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
   if (player_y <= 460) {
       player_y = player_y + block_height;
       console.log("block height = " + block_height);
       console.log("When down key is pressed, " , "X = " + player_x + "," , "Y = " + player_y);
       canvas.remove(player_object);
       player_update();
   } 
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_width;
        console.log("block width = " + block_width);
        console.log("When left key is pressed, " , "X = " + player_x + "," , "Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
       player_x = player_x + block_width;
       console.log("block width = " + block_width);
       console.log("When right key is pressed, " , "X = " + player_x + "," , "Y = " + player_y);
       canvas.remove(player_object);
       player_update(); 
    }
    
}

