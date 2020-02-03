import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Spark {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = {
            dx: utils.randomIntFromRange(-5, 5),
            dy: utils.randomIntFromRange(-15, 15)
        }
        this.ceFriction = 0.8
        this.gravity = 0.1
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
        if (this.y + this.radius + this.velocity.dy > canvas.height) {
            this.velocity.dy = -this.velocity.dy * this.ceFriction
        } else {
            this.velocity.dy += this.gravity
        }
        this.x += this.velocity.dx
        this.y += this.velocity.dy
    }

}

export default Spark;