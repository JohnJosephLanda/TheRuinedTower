import Phaser from "phaser"

import Player from "..//sprites/Player"

export default class Pause extends Phaser.Scene
{
    init(data) {
        this.prevScene = data.scene
    }
    create()
    {
        const text = this.add.text(200, 150, "Paused.", { font: "30px Garamond",fill: 'white' })
        this.resumeButton = this.add.text(350, 250, '▶', { font: "60px Garamond",fill: 'white',style:"italic", fixedHeight: '60', fixedWidth: '140', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            this.scene.wake(this.prevScene)
            this.scene.stop("pauseScreen")
        } )
    }
}