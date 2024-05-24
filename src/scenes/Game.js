import Phaser from "phaser"

export default class Game extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        this.ball = this.add.circle(400, 250, 7, 0xffffff)
        this.physics.add.existing(this.ball)

        this.wall = this.add.rectangle(100,300,50,500,0xffffff)
        this.physics.add.existing(this.wall, true)
        this.physics.add.collider(this.wall, this.ball)

        this.block = this.add.rectangle(300,500,500,100,0xffffff)
        this.physics.add.existing(this.block, true)
        this.physics.add.collider(this.block, this.ball)
        
        this.ball.body.setVelocity(0,0)
        this.ball.body.setCollideWorldBounds(true, 0, 0)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        const player = this.ball.body

        if (this.cursors.up.isDown && (player.onFloor())) {
            player.setVelocityY(-100)
        }
        if (this.cursors.right.isDown) {
            if (player.velocity.x < 25) player.setVelocityX(player.velocity.x+2)
            player.setAccelerationX(50)
        }
        else if (this.cursors.left.isDown) {
            if (player.velocity.x > -25) player.setVelocityX(player.velocity.x-2)
            player.setAccelerationX(-50)
        }
        else {
            player.setAccelerationX(-player.velocity.x*4)
        }

        // ice physics
        // if (this.cursors.up.isDown) {
        //     player.setVelocityY(-100)
        // }
        // if (this.cursors.right.isDown) {
        //     player.setAccelerationX(20)
        // }
        // else if (this.cursors.left.isDown) {
        //     player.setAccelerationX(-20)
        // }
        // else {
        //     player.setAccelerationX(0)
        // }
    }
}