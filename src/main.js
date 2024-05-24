import Phaser from 'phaser'

import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },
            debug: true
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add('titlescreen',TitleScreen)
game.scene.add("game",Game)

// this.load.image('player','src/images/player.png')
// const playerTexture = new Phaser.Textures.Texture(new Phaser.Textures.TextureManager('game'),'playerIMG','player')
// const player = new Phaser.GameObjects.Sprite('game',400,500)

// game.scene.start('titlescreen')
game.scene.start("game");