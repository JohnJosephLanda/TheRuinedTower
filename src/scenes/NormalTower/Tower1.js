import Phaser from "phaser"

import Player from "../../sprites/Player"

export default class Tower1 extends Phaser.Scene
{
    // player;
    preload()
    {
        this.load.image('player','src/sprites/PlayerStylesheet.png')
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

        this.ball = this.add.circle(784, 360, 7, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)

        this.imageColor = 0xffffff

        this.base = this.add.rectangle(400,450,800,150,this.imageColor)
        this.physics.add.existing(this.base, true)
        this.physics.add.collider(this.base, this.ball)

        this.leftWall = this.add.rectangle(50,250,100,500,this.imageColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.ball)

        this.rightWall = this.add.rectangle(775,150,50,300,this.imageColor)
        this.physics.add.existing(this.rightWall, true)
        this.physics.add.collider(this.rightWall, this.ball)

        this.firstPlat = this.add.rectangle(650,365,75,30,this.imageColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.ball)
        
        this.secondPlat = this.add.rectangle(500,330,75,50,this.imageColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.ball)

        this.thirdPlat = this.add.rectangle(350,300,75,50,this.imageColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.ball)
        
        this.fourthPlat = this.add.rectangle(200,320,75,120,this.imageColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.ball)
        
        this.fifthPlat = this.add.rectangle(125,300,75,150,this.imageColor)
        this.physics.add.existing(this.fifthPlat, true)
        this.physics.add.collider(this.fifthPlat, this.ball)
        
        this.sixthPlat = this.add.rectangle(250,200,100,30,this.imageColor)
        this.physics.add.existing(this.sixthPlat, true)
        this.physics.add.collider(this.sixthPlat, this.ball)
        
        this.seventhPlat = this.add.rectangle(550,200,100,30,this.imageColor)
        this.physics.add.existing(this.seventhPlat, true)
        this.physics.add.collider(this.seventhPlat, this.ball)
        
        this.eigthPlat = this.add.rectangle(725,200,50,100,this.imageColor)
        this.physics.add.existing(this.eigthPlat, true)
        this.physics.add.collider(this.eigthPlat, this.ball)
        
        this.ninthPlat = this.add.rectangle(740,120,50,10,this.imageColor)
        this.physics.add.existing(this.ninthPlat, true)
        this.physics.add.collider(this.ninthPlat, this.ball)
        
        this.tenthPlat = this.add.rectangle(740,80,50,10,this.imageColor)
        this.physics.add.existing(this.tenthPlat, true)
        this.physics.add.collider(this.tenthPlat, this.ball)
        
        this.topPlat = this.add.rectangle(740,40,50,10,this.imageColor)
        this.physics.add.existing(this.topPlat, true)
        this.physics.add.collider(this.topPlat, this.ball)

        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 0, 'Pause', { font: "30px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"tower1"})
            this.scene.sleep("tower1")
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
            this.scene.start("startingPointfrom1")
        }
        if (character.y < 5) {
            this.scene.start("tower2_4")
        }
    }
}