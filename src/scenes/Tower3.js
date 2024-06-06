import Phaser from "phaser"

import Player from "../sprites/Player"

export default class Tower3 extends Phaser.Scene
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

        this.ball = this.add.circle(20, 360, 7, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)

        this.imageColor = 0xffffff
        
        this.bottomLeftWall = this.add.rectangle(50,450,100,150,this.imageColor)
        this.physics.add.existing(this.bottomLeftWall, true)
        this.physics.add.collider(this.bottomLeftWall, this.ball)
        
        this.middleLeftWall = this.add.rectangle(50,250,100,200,this.imageColor)
        this.physics.add.existing(this.middleLeftWall, true)
        this.physics.add.collider(this.middleLeftWall, this.ball)
        
        this.topLeftWall = this.add.rectangle(50,50,100,150,this.imageColor)
        this.physics.add.existing(this.topLeftWall, true)
        this.physics.add.collider(this.topLeftWall, this.ball)

        this.firstPlat = this.add.rectangle(110,400,40,10,this.imageColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.ball)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // player.normalPhysics(this.cursors)
        
        // testing for the ball
        let character = this.ball.body
        
        if (this.cursors.up.isDown && (character.onFloor())) {
            character.setVelocityY(-100)
        }
        if (this.cursors.right.isDown) {
            if (character.velocity.x < 25) character.setVelocityX(character.velocity.x+2)
                character.setAccelerationX(50)
        }
        else if (this.cursors.left.isDown) {
            if (character.velocity.x > -25) character.setVelocityX(character.velocity.x-2)
            character.setAccelerationX(-50)
        }
        else {
            character.setAccelerationX(-character.velocity.x*4)
        }

        if (character.x > 795 && character.y < 250) {
            this.scene.start("tower2_4")
        }
        if (character.x > 795 && character.y > 250) {
            this.scene.start("tower2_4from3")
        }
        if (character.y < 5) {
            this.scene.start("startingPoint")
        }
    }
}