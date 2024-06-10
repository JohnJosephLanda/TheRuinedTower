import Phaser from "phaser"

import Player from "../sprites/Player"

export default class Tower2_4from3 extends Phaser.Scene
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

        this.ball = this.add.circle(780, 140, 7, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)

        this.imageColor = 0xffffff

        this.bottomPlat = this.add.rectangle(740,460,50,10,this.imageColor)
        this.physics.add.existing(this.bottomPlat, true)
        this.physics.add.collider(this.bottomPlat, this.ball)

        this.leftWall = this.add.rectangle(50,250,100,500,this.imageColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.ball)

        this.bottomRightWall = this.add.rectangle(775,450,50,150,this.imageColor)
        this.physics.add.existing(this.bottomRightWall, true)
        this.physics.add.collider(this.bottomRightWall, this.ball)
        
        this.middleRightWall = this.add.rectangle(775,250,50,200,this.imageColor)
        this.physics.add.existing(this.middleRightWall, true)
        this.physics.add.collider(this.middleRightWall, this.ball)
        
        this.topRightWall = this.add.rectangle(775,50,50,150,this.imageColor)
        this.physics.add.existing(this.topRightWall, true)
        this.physics.add.collider(this.topRightWall, this.ball)
        
        this.skyWall = this.add.rectangle(575,100,50,200,this.imageColor)
        this.physics.add.existing(this.skyWall, true)
        this.physics.add.collider(this.skyWall, this.ball)
        
        this.firstPlat = this.add.rectangle(680,430,50,10,this.imageColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.ball)
        
        // little speedrun skip for fun
        this.skipPlat1 = this.add.rectangle(280,440,20,5,this.imageColor)
        this.physics.add.existing(this.skipPlat1, true)
        this.physics.add.collider(this.skipPlat1, this.ball)
        
        this.skipPlat2 = this.add.rectangle(100,400,50,10,this.imageColor)
        this.physics.add.existing(this.skipPlat2, true)
        this.physics.add.collider(this.skipPlat2, this.ball)
        
        this.skipPlat3 = this.add.rectangle(200,350,50,10,this.imageColor)
        this.physics.add.existing(this.skipPlat3, true)
        this.physics.add.collider(this.skipPlat3, this.ball)

        // path after completing the room on the right
        this.secondPlat = this.add.rectangle(700,200,100,30,this.imageColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.ball)

        this.thirdPlat = this.add.rectangle(700,300,100,30,this.imageColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.ball)
        
        this.fourthPlat = this.add.rectangle(700,300,100,30,this.imageColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.ball)
        
        this.fifthPlat = this.add.rectangle(500,280,75,30,this.imageColor)
        this.physics.add.existing(this.fifthPlat, true)
        this.physics.add.collider(this.fifthPlat, this.ball)
        
        this.sixthPlat = this.add.rectangle(350,320,75,30,this.imageColor)
        this.physics.add.existing(this.sixthPlat, true)
        this.physics.add.collider(this.sixthPlat, this.ball)
        
        this.seventhPlat = this.add.rectangle(120,270,75,30,this.imageColor)
        this.physics.add.existing(this.seventhPlat, true)
        this.physics.add.collider(this.seventhPlat, this.ball)
        
        this.eighthPlat = this.add.rectangle(120,210,50,10,this.imageColor)
        this.physics.add.existing(this.eighthPlat, true)
        this.physics.add.collider(this.eighthPlat, this.ball)
        
        this.ninthPlat = this.add.rectangle(120,170,50,10,this.imageColor)
        this.physics.add.existing(this.ninthPlat, true)
        this.physics.add.collider(this.ninthPlat, this.ball)

        this.tenthPlat = this.add.rectangle(320,150,50,10,this.imageColor)
        this.physics.add.existing(this.tenthPlat, true)
        this.physics.add.collider(this.tenthPlat, this.ball)
        
        this.eleventhPlat = this.add.rectangle(540,100,30,10,this.imageColor)
        this.physics.add.existing(this.eleventhPlat, true)
        this.physics.add.collider(this.eleventhPlat, this.ball)
        
        this.twelfthPlat = this.add.rectangle(120,100,50,10,this.imageColor)
        this.physics.add.existing(this.twelfthPlat, true)
        this.physics.add.collider(this.twelfthPlat, this.ball)
        
        this.topPlat = this.add.rectangle(120,50,50,10,this.imageColor)
        this.physics.add.existing(this.topPlat, true)
        this.physics.add.collider(this.topPlat, this.ball)

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

        if (character.x > 785) {
            this.scene.start("tower3")
        }
        if (character.y < 20) {
            this.scene.start("tower5")
        }
        if (character.y > 480) {
            this.scene.start("tower1")
        }
    }
}