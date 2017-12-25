/**
 * 简化渲染操作
 */
const render = (system, canvas, width, height) => {
  const raf = window.requestAnimationFrame;
  const ctx = canvas.getContext('2d');

  canvas.width = width || canvas.clientWidth;
  canvas.height = height || canvas.clientHeight;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (typeof system.render !== 'function') {
      throw new TypeError('`render` method must be a function');
    }
    system.render(ctx);
    raf(draw);
  };

  if (system.setup) {
    system.setup();
  }
  draw();
};

class System {
  // some init action, like constructor
  setup() {}
  // invoke every animaiton frame
  render() {}
}

export default render;

