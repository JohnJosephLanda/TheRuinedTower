import Phaser from "phaser"

import Player from "../sprites/Player"

export default class Start extends Phaser.Scene
{
    // player;
    preload()
    {
        this.load.image('player','src/images/player.png')
    }

    create()
    {
        // working on adding the player

        // player = new Player({
        //     scene: this,
        //     x: 400,
        //     y: 400,
        //     img: 'player'
        // })
        // this.physics.add.existing(player)
        // player.body.setCollideWorldBounds(true, 0, 0)

        this.ball = this.add.circle(600, 300, 7, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)
        
        this.imageColor = 0xffffff
        
        this.base = this.add.rectangle(300,390,200,20,this.imageColor)
        this.physics.add.existing(this.base, true)
        this.physics.add.collider(this.base, this.ball)

        const text = this.add.text(200, 150, "Congratulations.", { font: "50px Arial",fill: 'white' })
        const text2 = this.add.text(300, 150, "You have beaten the tower.", { font: "30px Arial",fill: 'white' })

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // player.normalPhysics(this.cursors)
        
        // testing for the ball
        let character = this.ball.body
        
        if (this.cursors.up.isDown && (character.onFloor())) {
            character.setVelocityY(-150)
        }
        if (this.cursors.right.isDown) {
            if (character.velocity.x < 25) character.setVelocityX(character.velocity.x+2)
                character.setAccelerationX(75)
        }
        else if (this.cursors.left.isDown) {
            if (character.velocity.x > -25) character.setVelocityX(character.velocity.x-2)
            character.setAccelerationX(-75)
        }
        else {
            character.setAccelerationX(-character.velocity.x*4)
        }

        if (character.x < 5) {
            this.scene.start("tower1")
        }
    }
}