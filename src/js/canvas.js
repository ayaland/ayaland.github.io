import BballFireworks from './bball_fireworks';

// const loop = () => (requestAnimationFrame(loop));
// const random = (min, max) => (Math.random() * (max - min) + min);

const getCanvas = () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerHeight / 2;
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = '/.';
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.globalCompositeOperation = 'lighter';
  return { canvas, ctx };
}

// event listener for when DOM content is loaded
// callback will grab canvas el
window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM content loaded');
  const show = new BballFireworks(getCanvas());
  show.loop();
})