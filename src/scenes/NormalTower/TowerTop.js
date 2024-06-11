import Phaser from "phaser"

import Player from "../../sprites/Player"

export default class TowerTop extends Phaser.Scene
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

        this.ball = this.add.circle(20,90,7,0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)

        this.imageColor = 0xffffff
        
        this.leftWall = this.add.rectangle(50,300,100,400,this.imageColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.ball)

        this.firstPlat = this.add.rectangle(130,90,50,20,this.imageColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.ball)

        this.secondPlat = this.add.rectangle(170,70,50,20,this.imageColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.ball)

        this.thirdPlat = this.add.rectangle(210,50,50,20,this.imageColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.ball)

        this.fourthPlat = this.add.rectangle(250,30,50,20,this.imageColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.ball)
        
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

        if (character.x < 5) {
            this.scene.start("tower5fromtop")
        }
        if (character.y < 20) {
            this.scene.start("endingPoint")
        }
    }
}