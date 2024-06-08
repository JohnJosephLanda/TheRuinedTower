import Phaser from 'phaser'

import TitleScreen from './scenes/TitleScreen'
import Start from './scenes/Start'
import Tower1 from './scenes/Tower1'
import Tower2_4 from './scenes/Tower2_4'
import Tower3 from './scenes/Tower3'
import Tower2_4from3 from './scenes/Tower2_4from3'
import Tower5 from './scenes/Tower5'

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    backgroundColor: '#333333',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },
            debug: true
        }
    },

    scale: {
        mode: Phaser.Scale.RESIZE,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
}

const game = new Phaser.Game(config)

game.scene.add('titlescreen',TitleScreen)
game.scene.add("startingPoint",Start)
game.scene.add("tower1",Tower1)
game.scene.add("tower2_4",Tower2_4)
game.scene.add("tower3",Tower3)
game.scene.add("tower2_4from3",Tower2_4from3)
game.scene.add("tower5",Tower5)

// this.load.image('player','src/images/player.png')
// const playerTexture = new Phaser.Textures.Texture(new Phaser.Textures.TextureManager('game'),'playerIMG','player')
// const player = new Phaser.GameObjects.Sprite('game',400,500)

game.scene.start("titlescreen");
// game.scene.start("tower5"); // temp to work on level