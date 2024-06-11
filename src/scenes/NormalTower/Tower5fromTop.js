import Phaser from "phaser"

import Player from "../../sprites/Player"

export default class Tower5fromTop extends Phaser.Scene
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

        this.ball = this.add.circle(780,90,7,0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)

        this.imageColor = 0xffffff

        this.leftWall = this.add.rectangle(50,250,100,500,this.imageColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.ball)

        this.rightWall = this.add.rectangle(775,300,50,400,this.imageColor)
        this.physics.add.existing(this.rightWall, true)
        this.physics.add.collider(this.rightWall, this.ball)

        this.skyWallPlat = this.add.rectangle(575,400,50,200,this.imageColor)
        this.physics.add.existing(this.skyWallPlat, true)
        this.physics.add.collider(this.skyWallPlat, this.ball)

        this.skyWall = this.add.rectangle(670,330,30,200,this.imageColor)
        this.physics.add.existing(this.skyWall, true)
        this.physics.add.collider(this.skyWall, this.ball)

        this.bottomPlat = this.add.rectangle(120,480,50,10,this.imageColor)
        this.physics.add.existing(this.bottomPlat, true)
        this.physics.add.collider(this.bottomPlat, this.ball)

        this.firstPlat = this.add.rectangle(160,440,20,10,this.imageColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.ball)
        
        this.secondPlat = this.add.rectangle(110,420,30,20,this.imageColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.ball)
        
        this.thirdPlat = this.add.rectangle(115,365,30,10,this.imageColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.ball)
        
        this.fourthPlat = this.add.rectangle(200,365,50,10,this.imageColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.ball)
        
        this.fifthPlat = this.add.rectangle(320,365,50,10,this.imageColor)
        this.physics.add.existing(this.fifthPlat, true)
        this.physics.add.collider(this.fifthPlat, this.ball)
        
        this.sixthPlat = this.add.rectangle(450,340,50,10,this.imageColor)
        this.physics.add.existing(this.sixthPlat, true)
        this.physics.add.collider(this.sixthPlat, this.ball)
        
        this.seventhPlat = this.add.rectangle(670,480,30,20,this.imageColor)
        this.physics.add.existing(this.seventhPlat, true)
        this.physics.add.collider(this.seventhPlat, this.ball)
        
        this.eighthPlat = this.add.rectangle(740,450,30,10,this.imageColor)
        this.physics.add.existing(this.eighthPlat, true)
        this.physics.add.collider(this.eighthPlat, this.ball)
        
        this.ninthPlat = this.add.rectangle(740,400,30,10,this.imageColor)
        this.physics.add.existing(this.ninthPlat, true)
        this.physics.add.collider(this.ninthPlat, this.ball)
        
        this.tenthPlat = this.add.rectangle(738,350,40,10,this.imageColor)
        this.physics.add.existing(this.tenthPlat, true)
        this.physics.add.collider(this.tenthPlat, this.ball)
        
        this.eleventhPlat = this.add.rectangle(700,320,30,10,this.imageColor)
        this.physics.add.existing(this.eleventhPlat, true)
        this.physics.add.collider(this.eleventhPlat, this.ball)
        
        this.twelfthPlat = this.add.rectangle(703,270,40,10,this.imageColor)
        this.physics.add.existing(this.twelfthPlat, true)
        this.physics.add.collider(this.twelfthPlat, this.ball)
        
        this.thirtheenthPlat = this.add.rectangle(500,255,70,40,this.imageColor)
        this.physics.add.existing(this.thirtheenthPlat, true)
        this.physics.add.collider(this.thirtheenthPlat, this.ball)
        
        this.fourteenthPlat = this.add.rectangle(350,280,70,50,this.imageColor)
        this.physics.add.existing(this.fourteenthPlat, true)
        this.physics.add.collider(this.fourteenthPlat, this.ball)
        
        this.fifteenthPlat = this.add.rectangle(200,280,85,55,this.imageColor)
        this.physics.add.existing(this.fifteenthPlat, true)
        this.physics.add.collider(this.fifteenthPlat, this.ball)
        
        this.sixteenthPlat = this.add.rectangle(120,210,50,20,this.imageColor)
        this.physics.add.existing(this.sixteenthPlat, true)
        this.physics.add.collider(this.sixteenthPlat, this.ball)
        
        this.seventeenthPlat = this.add.rectangle(300,180,60,30,this.imageColor)
        this.physics.add.existing(this.seventeenthPlat, true)
        this.physics.add.collider(this.seventeenthPlat, this.ball)
        
        this.topPlat = this.add.rectangle(575,140,50,20,this.imageColor)
        this.physics.add.existing(this.topPlat, true)
        this.physics.add.collider(this.topPlat, this.ball)
        
        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"tower5fromtop"})
            this.scene.sleep("tower5fromtop")
            while (this.scene.isSleeping()) {
                this.ball.body.setVelocity(0)
            }
        } )
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
            this.scene.start("towertop")
        }
        if (character.y > 485 & character.x > 575) {
            this.scene.start("tower2_4from3")
        }
        else if (character.y > 485) {
            this.scene.start("tower2_4")
        }
    }
}