// const canvas = document.querySelector('canvas')
// const ctx = canvas.getContext('2d')
const random = (min, max) => Math.floor((Math.random() * (max - min) + min));
const colors = ['#00B2A9', '#EF426F', '#FF8200', '#8A8D8F']
// canvas.width = innerWidth
// canvas.height = innerHeight

// when a firework explodes, it breaks into stars
class Star {
    constructor(x, y) {
        console.log('Star constructed')
        this.x = x
        this.y = y
        this.coordinates = [];
        this.coordinateCount = 5;
        while(this.coordinateCount--) {
            this.coordinates.push([this.x, this.y]);
        }
        this.angle = random(0, Math.PI * 2);
        this.speed = random(1, 10);
        this.ceFriction = 0.95;
        this.gravity = 1;
        this.hue = colors[random(0, colors.length)];
        this.brightness = random(50, 80);
        this.alpha = 1;
        this.decay = random(0.015, 0.03);
    }

    update(index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        this.speed *= this.ceFriction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.alpha -= this.decay;

        if(this.alpha <= this.decay) {
            particles.splice(index, 1);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(
            this.coordinates[this.coordinates.length][0],
            this.coordinates[this.coordinates.length][1]
            );
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = 'rgb(' + this.hue + ', 100% ' + this.brightness + '%, ' + this.alpha + ')';
        ctx.stroke();
    }

}

export default Star;