import Phaser from "phaser"

import Player from "../../sprites/Player"
import bg0 from "../../media/skybg.png" 

export default class Start extends Phaser.Scene
{
    // player;
    preload()
    {
        this.load.spritesheet('player','../../sprites/PlayerStylesheet.png',{frameWidth:50})
        this.load.image('skyback', bg0);
    }

    create()
    {
        // working on adding the player

        // this.player = new Player({
        //     scene: this,
        //     x: 400,
        //     y: 200,
        //     img: 'player'
        // })
        // this.physics.add.existing(this.player)
        // this.player.body.setCollideWorldBounds(true, 0, 0)
        
        // this.player = this.make.sprite(new Player({
        //     scene: this,
        //     x:400,
        //     y:200,
        //     img: 'wall'
        // }),true)

       this.width = this.cameras.main.width
        this.height = this.cameras.main.height

        this.bg = this.add.image(0,0,'skyback')
        this.bg.setOrigin(0, 0)

        this.ball = this.add.circle(600, 300, 7, 0xffffff)
        this.physics.add.existing(this.ball)
        this.ball.body.setCollideWorldBounds(true, 0, 0)
        
        //this.imageColor = 0xffffff
        this.imageColor = 0x696567
        
        this.topLeftWall = this.add.rectangle(50,150,100,300,this.imageColor)
        this.physics.add.existing(this.topLeftWall, true)
        this.physics.add.collider(this.topLeftWall, this.ball)

        this.floor = this.add.rectangle(400,485,800,30,this.imageColor)
        this.physics.add.existing(this.floor, true)
        this.physics.add.collider(this.floor, this.ball)

        this.stair2 = this.add.rectangle(250,455,550,30,this.imageColor)
        this.physics.add.existing(this.stair2, true)
        this.physics.add.collider(this.stair2, this.ball)

        this.stair3 = this.add.rectangle(230,425,500,30,this.imageColor)
        this.physics.add.existing(this.stair3, true)
        this.physics.add.collider(this.stair3, this.ball)

        this.stair4 = this.add.rectangle(210,395,450,30,this.imageColor)
        this.physics.add.existing(this.stair4, true)
        this.physics.add.collider(this.stair4, this.ball)

        this.stair5 = this.add.rectangle(190,365,400,30,this.imageColor)
        this.physics.add.existing(this.stair5, true)
        this.physics.add.collider(this.stair5, this.ball)

        const text = this.add.text(200, 150, "Enter the Tower ... if you dare 😈", { font: "30px Garamond",fill: 'white' })
        const text2 = this.add.text(300, 200, "←", { font: "50px Fantasy",fill: 'white' })

        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"startingPoint"})
            this.scene.sleep("startingPoint")
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

        if (character.x < 5) {
            this.scene.start("tower1")
        }
    }
}