var socket;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);

	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);

}

function newDrawing(data) {
	noStroke();
	fill(255, 0, random(255));
	ellipse(data.x, data.y, 60, 60);
}
function mouseDragged(){
	console.log('Sending: ' + mouseX + ',' + mouseY);

	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse',data);

	noStroke();
	fill(random(255),random(255));
	ellipse(mouseX,mouseY,60,60);
}

function draw() {

}
