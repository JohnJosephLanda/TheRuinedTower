import Phaser from "phaser"

import Player from "../../sprites/Player"
import player from "../../sprites/PlayerStylesheet.png"
import bg0 from "../../media/skybg.png" 

export default class SpeedrunEnd extends Phaser.Scene
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
            x:210,
            y:450,
            img: 'player'
        }),true)
        this.physics.add.existing(this.player)
        this.player.body.setCollideWorldBounds(true, 0, 0)
        this.player.setScale(.13,.13)
        
        this.blockColor = 0x91917e

        this.firstPlat = this.add.rectangle(210,470,50,20,this.blockColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.player)

        this.secondPlat = this.add.rectangle(250,450,50,20,this.blockColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.player)
        
        this.endPlat = this.add.rectangle(500,420,400,20,this.blockColor)
        this.physics.add.existing(this.endPlat, true)
        this.physics.add.collider(this.endPlat, this.player)

        const text = this.add.text(100, 20, "Congratulations.", { font: "50px Garamond",fill: 'white' })
        const text2 = this.add.text(300, 250, "You have beaten the tower.", { font: "30px Garamond",fill: 'white' })
        const text3 = this.add.text(300, 300, "Jump off to restart or play another tower.", { font: "20px Garamond",fill: 'white' })

        this.cursors = this.input.keyboard.createCursorKeys()
        
        this.player.play('idle',true)
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

        if (character.y > 480 || character.x > 785 || character.x < 5) {
            this.scene.start("titlescreen")
        }
    }
}