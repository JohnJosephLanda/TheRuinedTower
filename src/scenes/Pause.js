import Phaser from "phaser"

import Player from "..//sprites/Player"

export default class Pause extends Phaser.Scene
{
    init(data) {
        this.prevScene = data.scene
    }
    create()
    {
        const text = this.add.text(200, 150, "Paused.", { font: "30px Fantasy",fill: 'white' })
        this.resumeButton = this.add.text(350, 250, 'Resume', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '140', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            this.scene.wake(this.prevScene)
            this.scene.stop("pauseScreen")
        } )
    }
}