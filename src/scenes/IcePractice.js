import Phaser from "phaser"

import Player from "../sprites/Player.js"
import player from "../sprites/PlayerStylesheet.png"
import bg0 from "../media/skybg.png" 

export default class IcePractice extends Phaser.Scene
{
    // player;
    preload()
    {
        this.load.spritesheet('player',player,{frameWidth:76.8,frameHeight:138,startFrame:0,endFrame:5})
        this.load.image('back', bg0);
    }

    create()
    {
        this.width = this.cameras.main.width
        this.height = this.cameras.main.height

        this.bg = this.add.image(0,0,'back')
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
            x:30,
            y:360,
            img: 'player'
        }),true)
        this.physics.add.existing(this.player)
        this.player.body.setCollideWorldBounds(true, 0, 0)
        this.player.setScale(.13,.13)

        this.wallColor = 0x729196
        this.blockColor = 0xb3dce3

        this.firstPlat = this.add.rectangle(580,330,75,10,this.blockColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.player)
        
        this.secondPlat = this.add.rectangle(260,330,75,10,this.blockColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.player)

        this.thirdPlat = this.add.rectangle(425,290,75,10,this.blockColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.player)

        this.fourthPlat = this.add.rectangle(425,235,40,10,this.blockColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.player)

        this.fifthPlat = this.add.rectangle(320,210,60,10,this.blockColor)
        this.physics.add.existing(this.fifthPlat, true)
        this.physics.add.collider(this.fifthPlat, this.player)

        this.sixthPlat = this.add.rectangle(530,210,60,10,this.blockColor)
        this.physics.add.existing(this.sixthPlat, true)
        this.physics.add.collider(this.sixthPlat, this.player)

        this.base = this.add.rectangle(400,450,800,150,this.wallColor)
        this.physics.add.existing(this.base, true)
        this.physics.add.collider(this.base, this.player)

        this.rightWall = this.add.rectangle(775,250,100,500,this.wallColor)
        this.physics.add.existing(this.rightWall, true)
        this.physics.add.collider(this.rightWall, this.player)

        this.leftWall = this.add.rectangle(25,150,50,300,this.wallColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.player)
        
        const text = this.add.text(300, 100, "Ice Practice Area", { font: "30px Garamond",fill: 'white' })
        const text2 = this.add.text(10, 300, "← Normal practice area", { font: "20px Garamond",fill: 'white' })

        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"icepractice"})
            this.scene.sleep("icepractice")
            while (this.scene.isSleeping()) {
                this.player.body.setVelocity(0)
            }
        } )
        
        this.player.play('idle',true)
    }

    update() {
        let character = this.player.body
        
        if (this.cursors.up.isDown && (character.onFloor())) {
            character.setVelocityY(-150)
        }
        if (this.cursors.right.isDown) {
            character.setAccelerationX(50)
            this.player.play('walkRight',true)
        }
        else if (this.cursors.left.isDown) {
            character.setAccelerationX(-50)
            this.player.play('walkLeft',true)
        }
        else {
            character.setAccelerationX(0)
            this.player.play('idle',true)
        }
        if (!character.onFloor()) {
            this.player.play('jump',true)
        }

        if (character.x < 10) {
            this.scene.start('practice')
        }

    }
}