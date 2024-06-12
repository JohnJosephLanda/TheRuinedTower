import Phaser from "phaser"

import Player from "../../sprites/Player.js"
import player from "../../sprites/PlayerStylesheet.png"
import bg0 from "../../media/skybg.png" 

export default class Tower5fromTop extends Phaser.Scene
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
            x:780,
            y:90,
            img: 'player'
        }),true)
        this.physics.add.existing(this.player)
        this.player.body.setCollideWorldBounds(true, 0, 0)
        this.player.setScale(.2,.2)

        this.wallColor = 0x4c4d43
        this.blockColor = 0xb2b39b

        this.bottomPlat = this.add.rectangle(120,480,50,10,this.blockColor)
        this.physics.add.existing(this.bottomPlat, true)
        this.physics.add.collider(this.bottomPlat, this.player)

        this.firstPlat = this.add.rectangle(160,440,20,10,this.blockColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.player)
        
        this.secondPlat = this.add.rectangle(110,420,30,20,this.blockColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.player)
        
        this.thirdPlat = this.add.rectangle(115,365,30,10,this.blockColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.player)
        
        this.fourthPlat = this.add.rectangle(200,365,50,10,this.blockColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.player)
        
        this.fifthPlat = this.add.rectangle(320,365,50,10,this.blockColor)
        this.physics.add.existing(this.fifthPlat, true)
        this.physics.add.collider(this.fifthPlat, this.player)
        
        this.sixthPlat = this.add.rectangle(450,340,50,10,this.blockColor)
        this.physics.add.existing(this.sixthPlat, true)
        this.physics.add.collider(this.sixthPlat, this.player)
        
        this.seventhPlat = this.add.rectangle(670,480,30,20,this.blockColor)
        this.physics.add.existing(this.seventhPlat, true)
        this.physics.add.collider(this.seventhPlat, this.player)
        
        this.eighthPlat = this.add.rectangle(740,450,30,10,this.blockColor)
        this.physics.add.existing(this.eighthPlat, true)
        this.physics.add.collider(this.eighthPlat, this.player)
        
        this.ninthPlat = this.add.rectangle(740,400,30,10,this.blockColor)
        this.physics.add.existing(this.ninthPlat, true)
        this.physics.add.collider(this.ninthPlat, this.player)
        
        this.tenthPlat = this.add.rectangle(738,350,40,10,this.blockColor)
        this.physics.add.existing(this.tenthPlat, true)
        this.physics.add.collider(this.tenthPlat, this.player)
        
        this.eleventhPlat = this.add.rectangle(700,320,30,10,this.blockColor)
        this.physics.add.existing(this.eleventhPlat, true)
        this.physics.add.collider(this.eleventhPlat, this.player)
        
        this.twelfthPlat = this.add.rectangle(703,270,40,10,this.blockColor)
        this.physics.add.existing(this.twelfthPlat, true)
        this.physics.add.collider(this.twelfthPlat, this.player)
        
        this.thirtheenthPlat = this.add.rectangle(500,255,70,40,this.blockColor)
        this.physics.add.existing(this.thirtheenthPlat, true)
        this.physics.add.collider(this.thirtheenthPlat, this.player)
        
        this.fourteenthPlat = this.add.rectangle(350,280,70,50,this.blockColor)
        this.physics.add.existing(this.fourteenthPlat, true)
        this.physics.add.collider(this.fourteenthPlat, this.player)
        
        this.fifteenthPlat = this.add.rectangle(200,280,85,55,this.blockColor)
        this.physics.add.existing(this.fifteenthPlat, true)
        this.physics.add.collider(this.fifteenthPlat, this.player)
        
        this.sixteenthPlat = this.add.rectangle(120,210,50,20,this.blockColor)
        this.physics.add.existing(this.sixteenthPlat, true)
        this.physics.add.collider(this.sixteenthPlat, this.player)
        
        this.seventeenthPlat = this.add.rectangle(300,180,60,30,this.blockColor)
        this.physics.add.existing(this.seventeenthPlat, true)
        this.physics.add.collider(this.seventeenthPlat, this.player)
        
        this.topPlat = this.add.rectangle(575,140,50,20,this.blockColor)
        this.physics.add.existing(this.topPlat, true)
        this.physics.add.collider(this.topPlat, this.player)
        
        this.leftWall = this.add.rectangle(50,250,100,500,this.wallColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.player)

        this.rightWall = this.add.rectangle(775,300,50,400,this.wallColor)
        this.physics.add.existing(this.rightWall, true)
        this.physics.add.collider(this.rightWall, this.player)

        this.skyWallPlat = this.add.rectangle(575,400,50,200,this.wallColor)
        this.physics.add.existing(this.skyWallPlat, true)
        this.physics.add.collider(this.skyWallPlat, this.player)

        this.skyWall = this.add.rectangle(670,330,30,200,this.wallColor)
        this.physics.add.existing(this.skyWall, true)
        this.physics.add.collider(this.skyWall, this.player)
        
        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"tower5fromtop"})
            this.scene.sleep("tower5fromtop")
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

        if (character.x > 785) {
            this.scene.start("towertop")
        }
        if (character.y > 480 & character.x > 575) {
            this.scene.start("tower2_4from3")
        }
        else if (character.y > 480) {
            this.scene.start("tower2_4")
        }
    }
}