// class that runs our fireworks show
import Firework from './firework';
const random = (min, max) => Math.floor((Math.random() * (max - min) + min));

class BballFireworks {
    constructor({ canvas, ctx }) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.timerTick = 0;
        this.timerTotal = 100;
        this.fireworks = [];
        
        // this.ctx.globalCompositeOperation = 'destination-out';
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        // lighter creates bright highlight points as fireworks and stars overlap
        // this.ctx.globalCompositeOperation = 'lighter';
        
        console.log('Bballfireworks!')
        this.loop = this.loop.bind(this);
        this.addFirework = this.addFirework.bind(this);
        this.launchFirework = this.launchFirework.bind(this);
    }

    addFirework() {
        if (this.timerTick >= this.timerTotal) {
            this.fireworks.push(new Firework(this.canvas.width / 2, this.canvas.height, random(0, this.canvas.width), random(0, this.canvas.height / 2), this.ctx));
            this.timerTick = 0;
        } else {
            this.timerTick++;
        }

    }

    launchFirework() {
        let i = this.fireworks.length;
        while (i--) {
            this.fireworks[i].draw();
            this.fireworks[i].update(i);
        }
    }
    
    loop() {
        this.addFirework();
        this.launchFirework();
        requestAnimationFrame(this.loop);
    }
}
// window.onload = loop();
export default BballFireworks;

