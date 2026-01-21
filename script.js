let list = [];
function preload(){
    list = loadJSON("data.json");
}
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background("lavender");
    fill(0);
    textAlign("center");
    textSize(25);  
    text("Canada's Exports", 200, 40);
    // fill(200);/
    // rect(70, 20, 50, 14);
    // if (mouseIsPressed === true) {
    //     fill(170, 175, 200);
    // } else {
    //     fill("lightyellow");
    // }
    // circle(mouseX, mouseY, 25);

    Object.values (list).map((item, index) => {
        fill("lightpink");
        rect(50, index * 30 + 65, item.amount, 10);
        fill (0);
        textSize(12);
        textAlign("left");
        text(item.name, 50, index * 30 + 60);
    });
}