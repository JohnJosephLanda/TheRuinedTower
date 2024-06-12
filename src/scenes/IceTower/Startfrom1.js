import Phaser from "phaser"

import Player from "../../sprites/Player.js"
import player from "../../sprites/PlayerStylesheet.png"
import bg0 from "../../media/skybg.png" 

export default class Startfrom1 extends Phaser.Scene
{
    // player;
    preload()
    {
        this.load.spritesheet('player',player,{frameWidth:76.8,frameHeight:138,startFrame:0,endFrame:5})
        this.load.image('skyback', bg0);
    }

    create()
    {
        this.width = this.cameras.main.width
        this.height = this.cameras.main.height

        this.bg = this.add.image(0,0,'skyback')
        this.bg.setOrigin(0, 0)

        this.anims.create({
            key:"idle",
            frames: this.anims.generateFrameNumbers('player',{frames:[0]}),
            frameRate: 1,
            repeat:-1
        })
        this.anims.create({
            key:"jump",
            frames: this.anims.generateFrameNumbers('player',{frames:[1]}),
            frameRate: 1,
            repeat:-1
        })
        this.anims.create({
            key:"walkLeft",
            frames: this.anims.generateFrameNumbers('player',{frames:[2,3]}),
            frameRate: 10,
            repeat:-1
        })
        this.anims.create({
            key:"walkRight",
            frames: this.anims.generateFrameNumbers('player',{frames:[4,5]}),
            frameRate: 10,
            repeat:-1
        })
        
        this.player = this.make.sprite(new Player({
            scene: this,
            x:20,
            y:340,
            img: 'player'
        }),true)
        this.physics.add.existing(this.player)
        this.player.body.setCollideWorldBounds(true, 0, 0)
        this.player.setScale(.13,.13)
        
        this.wallColor = 0x696567
        
        this.topLeftWall = this.add.rectangle(50,150,100,300,this.wallColor)
        this.physics.add.existing(this.topLeftWall, true)
        this.physics.add.collider(this.topLeftWall, this.player)

        this.floor = this.add.rectangle(400,485,800,30,this.wallColor)
        this.physics.add.existing(this.floor, true)
        this.physics.add.collider(this.floor, this.player)

        this.stair2 = this.add.rectangle(250,455,550,30,this.wallColor)
        this.physics.add.existing(this.stair2, true)
        this.physics.add.collider(this.stair2, this.player)

        this.stair3 = this.add.rectangle(230,425,500,30,this.wallColor)
        this.physics.add.existing(this.stair3, true)
        this.physics.add.collider(this.stair3, this.player)

        this.stair4 = this.add.rectangle(210,395,450,30,this.wallColor)
        this.physics.add.existing(this.stair4, true)
        this.physics.add.collider(this.stair4, this.player)

        this.stair5 = this.add.rectangle(190,365,400,30,this.wallColor)
        this.physics.add.existing(this.stair5, true)
        this.physics.add.collider(this.stair5, this.player)

        const text = this.add.text(200, 200, "Enter the Tower ... if you dare 😈", { font: "30px Garamond",fill: 'white' })
        const text2 = this.add.text(300, 250, "←", { font: "50px Fantasy",fill: 'white' })

        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"icestartingPointfrom1"})
            this.scene.sleep("icestartingPointfrom1")
            while (this.scene.isSleeping()) {
                this.player.body.setVelocity(0)
            }
        } )
    }

    update() {
        let character = this.player.body
        
        if (this.cursors.up.isDown && (character.onFloor())) {
            character.setVelocityY(-150)
        }
        if (this.cursors.right.isDown) {
            if (character.velocity.x < 25) character.setVelocityX(character.velocity.x+2)
                character.setAccelerationX(75)
            this.player.play('walkRight',true)
        }
        else if (this.cursors.left.isDown) {
            if (character.velocity.x > -25) character.setVelocityX(character.velocity.x-2)
            character.setAccelerationX(-75)
            this.player.play('walkLeft',true)
        }
        else {
            character.setAccelerationX(-character.velocity.x*4)
            this.player.play('idle',true)
        }
        if (!character.onFloor()) {
            this.player.play('jump',true)
        }

        if (character.x < 5) {
            this.scene.start("icetower1")
        }
    }
}