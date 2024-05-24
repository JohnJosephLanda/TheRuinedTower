import Phaser from "phaser"

export default class Game extends Phaser.Scene
{
    preload()
    {
        this.load.image('player','src/images/player.png')
    }

    create()
    {
        let player = new Player({
            scene: this,
            x: 400,
            y: 400
        })
        this.physics.add.existing(player)
        player.body.setCollideWorldBounds(true, 0, 0)

        this.ball = this.add.circle(400, 250, 7, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)

        this.wall = this.add.rectangle(100,300,50,500,0xffffff)
        this.physics.add.existing(this.wall, true)
        this.physics.add.collider(this.wall, this.ball)
        this.physics.add.collider(this.wall, player)

        this.block = this.add.rectangle(300,500,100,100,0xffffff)
        this.physics.add.existing(this.block, true)
        this.physics.add.collider(this.block, this.ball)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // player.normalPhysics()
    }
}