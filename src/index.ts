import * as PIXI from 'pixi.js';
import { GameSettings } from './settings/game-settings';
import { animals } from "./words/animals";
import { KeyedImage } from "./models/keyed-image";

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application(GameSettings);

let sprites: any = { };
// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

const keyedImages: Array<KeyedImage> = animals.map(animal => animal.keyedImages).flat();

const loaderImages: Array<{name: string, url: string}> = keyedImages.map(keyedImage => {
    return { name: keyedImage.key, url: keyedImage.image }
});

app.loader.add(loaderImages)
    .load((loader, resources) => {
        sprites.bear = new PIXI.Sprite(resources.bear.texture);
        sprites.bear2 = new PIXI.Sprite(resources.bear2.texture);
        sprites.wolf = new PIXI.Sprite(resources.wolf.texture);

        sprites.bear.x = 0;
        sprites.bear.y = 0;
        sprites.bear.height = sprites.bear.width = 100;

        sprites.bear2.x = 100;
        sprites.bear2.y = 0;
        sprites.bear2.height = sprites.bear2.width = 100;

        sprites.wolf.x = 200;
        sprites.wolf.y = 0
        sprites.wolf.height = sprites.wolf.width = 100;

        app.ticker.add(delta => gameLoop(delta));
        app.stage.addChild(sprites.bear);
    });

function gameLoop(delta: any) {
    sprites.bear.x+=1;
}


// app.loader.add('bear', BearImage).load((loader, resources) => {
//     // This creates a texture from a 'bear.png' image
//     const bear = new PIXI.Sprite(resources.bear.texture);

//     // Setup the position of the bear
//     bear.x = app.renderer.width / 2;
//     bear.y = app.renderer.height / 2;

//     //Set the size of the bear
//     bear.width = 200;
//     bear.height = 200;

//     // Rotate around the center 
//     bear.anchor.x = 0.5;
//     bear.anchor.y = 0.5;

//     // Add the bear to the scene we are building
//     app.stage.addChild(bear);

//     // Listen for frame updates
//     app.ticker.add(() => {
//          // each frame we spin the bear around a bit
//         bear.rotation += 0.01;
//     });
// });