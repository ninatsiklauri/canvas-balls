let canvas = document.querySelector("canvas");


canvas.width = 600;
canvas.height = 600;


let ctx = canvas.getContext("2d");


function Circle (x, y,dx ,dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy
    this.radius = radius


    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.fill()
    }
    this.update = function () {
        if(this.x +  this.radius > 600 || this.x - radius < 0) {
            this.dx = -this.dx
        };
        if(this.y +  this.radius > 600 || this.y - radius < 0) {
            this.dy = -this.dy
        };
        this.x += this.dx;
        this.y += this.dy;

        this.draw()
    }
}
let circleArray = []

for(let i = 0; i < 200; i++) {
    var radius = 30
    var x = Math.random() *  (600 - radius * 2) + radius
    var y =  Math.random() * (600 - radius * 2) + radius
    var dx = (Math.random() - 0.5)
    var dy = (Math.random() - 0.5)
    circleArray.push(new Circle(x, y, dx, dy, radius))
    
}
console.log(circleArray)

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, 600, 600);
    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate()
