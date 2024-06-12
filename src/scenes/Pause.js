import Phaser from "phaser"

import Player from "..//sprites/Player"

export default class Pause extends Phaser.Scene
{
    init(data) {
        this.prevScene = data.scene
    }
    create()
    {

        const text = this.add.text(250, 150, "PAUSED.", { font: "80px Garamond",fill: 'white' })
        this.resumeButton = this.add.text(325, 250, '▶', { font: "60px Garamond",fill: 'white',style:"italic", fixedHeight: '60', fixedWidth: '140', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            this.scene.wake(this.prevScene)
            this.scene.stop("pauseScreen");
        } )
        this.quitButton = this.add.text(315, 330, 'Back to Title', { font: "30px Garamond",fill: 'white',style:"italic", fixedHeight: '60', fixedWidth: '160', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            this.scene.stop(this.prevScene)
            this.scene.start('titlescreen')
        } )

    }
}