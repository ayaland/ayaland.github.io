import Star from './star';

const random = (min, max) => Math.floor((Math.random() * (max - min) + min));
const colors = ['#00B2A9', '#EF426F', '#FF8200', '#8A8D8F']
const calculateDistance = (x1, x2, y1, y2) => {
    let xDistance = x1 - x2;
    let yDistance = y1 - y2;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// the single firework object that is shot into the sky
class Firework {
    constructor(x1, y1, x2, y2, ctx) {
        this.x = x1;
        this.y = y1;
        // initial coordinates
        this.x1 = x1;
        this.y1 = y1;
        // end coordinates
        this.x2 = x2;
        this.y2 = y2;
        
        this.ctx = ctx;
        
        this.dToEndPoint = 0;
        this.dTraveled = 0;
        this.coordinates = [];
        this.coordLength = 2;
        while (this.coordLength--) {
            this.coordinates.push([this.x, this.y]);
        }
        
        this.angle = Math.atan2(y2 - y1, x2 - x1);
        this.speed = 9;
        this.gravity = 0.97;
        this.brightness = random(50, 70);
        this.targetRadius = 1;
        this.hue = colors[random(0, colors.length)];
        this.stars = [];
        // this.calculateDistance = this.calculateDistance.bind(this);
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
    }
    

    update(index) {
        this.dToEndPoint = calculateDistance(this.x1, this.x2, this.y1, this.y2)
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);

        if(this.targetRadius < 8) {
            this.targetRadius += 0.3;
        } else {
            this.targetRadius = 1;
        }

        this.speed *= this.gravity;

        let vx = Math.cos(this.angle) * this.speed;
        let vy = Math.sin(this.angle) * this.speed;
        
        this.dTraveled = calculateDistance(this.x1, this.x + vx, this.y1, this.y + vy);

        if (this.dTraveled >= this.dToEndpoint) {
            createStars(this.x2, this.y2);
            fireworks.splice(index, 1);
        } else {
            this.x += vx;
            this.y += vy;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(
            this.coordinates[this.coordinates.length - 1][0],
            this.coordinates[this.coordinates.length - 1][1]
            );
        this.ctx.lineTo(this.x, this.y);
        this.ctx.strokeStyle = this.hue;
        // this.ctx.strokeStyle = 'rgb(' + this.hue + ', 100% ' + this.brightness + '%)';
        this.ctx.stroke();
    }

    createStars(x, y) {
        let addStar = 10;
        while (addStar--) {
            this.stars.push(new Star(this.x, this.y));
        }
        let starCount = this.stars.length;
        while (starCount--) {
            stars[starCount].draw();
            stars[starCount].update(starCount)
        }
    }
}

export default Firework;