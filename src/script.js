import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
const player = PIXI.Sprite.from("../src/assets/bunny.png"); 
(async () => {
    await app.init({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb
    });

    document.body.appendChild(app.canvas);

    player.anchor.set(0.5);
    player.x = app.canvas.width / 2;
    player.y = app.canvas.height / 2;

    app.stage.addChild(player);

    app.stage.interactive = true
    app.stage.on("pointermove", movePlayer)
  })();

  function movePlayer(e){
    let pos = e.data.global
    player.x = pos.x
    player.y = pos.y
  }