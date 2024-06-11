import Phaser from "phaser"

import Player from "../../sprites/Player"

export default class End extends Phaser.Scene
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

        this.ball = this.add.circle(210,450, 7, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)
        
        this.imageColor = 0xffffff

        this.firstPlat = this.add.rectangle(210,470,50,20,this.imageColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.ball)

        this.secondPlat = this.add.rectangle(250,450,50,20,this.imageColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.ball)
        
        this.endPlat = this.add.rectangle(500,420,400,20,this.imageColor)
        this.physics.add.existing(this.endPlat, true)
        this.physics.add.collider(this.endPlat, this.ball)

        const text = this.add.text(100, 100, "Congratulations.", { font: "50px Arial",fill: 'white' })
        const text2 = this.add.text(300, 250, "You have beaten the tower.", { font: "30px Arial",fill: 'white' })

        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 0, 'Pause', { font: "30px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"endingPoint"})
            this.scene.sleep("endingPoint")
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

        if (character.y > 485) {
            this.scene.start("towertop")
        }
    }
}