import Phaser from "phaser"

import Player from "../../sprites/Player.js"
import player from "../../sprites/PlayerStylesheet.png"
import bg0 from "../../media/skybg.png" 

export default class IceTower2_4from5 extends Phaser.Scene
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
        
        const arrowTo3 = this.add.text(750, 338, "➡", { font: "40px Fantasy",fill: 'white' })
        const arrowTo5 = this.add.text(113, 5, "↑", { font: "30px Fantasy",fill: 'white' })
        const arrowFrom3 = this.add.text(750, 110, "←", { font: "40px Fantasy",fill: 'white' })
        
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
            x:320,
            y:50,
            img: 'player'
        }),true)
        this.physics.add.existing(this.player)
        this.player.body.setCollideWorldBounds(true, 0, 0)
        this.player.setScale(.13,.13)

        this.wallColor = 0x729196
        this.blockColor = 0xb3dce3
        
        this.firstPlat = this.add.rectangle(680,430,50,10,this.blockColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.player)

        // path after completing the room on the right
        this.secondPlat = this.add.rectangle(700,200,100,30,this.blockColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.player)

        this.thirdPlat = this.add.rectangle(700,300,100,30,this.blockColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.player)
        
        this.fourthPlat = this.add.rectangle(700,300,100,30,this.blockColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.player)
        
        this.fifthPlat = this.add.rectangle(500,280,75,30,this.blockColor)
        this.physics.add.existing(this.fifthPlat, true)
        this.physics.add.collider(this.fifthPlat, this.player)
        
        this.sixthPlat = this.add.rectangle(350,320,75,30,this.blockColor)
        this.physics.add.existing(this.sixthPlat, true)
        this.physics.add.collider(this.sixthPlat, this.player)
        
        this.seventhPlat = this.add.rectangle(120,270,75,30,this.blockColor)
        this.physics.add.existing(this.seventhPlat, true)
        this.physics.add.collider(this.seventhPlat, this.player)
        
        this.eighthPlat = this.add.rectangle(120,210,50,10,this.blockColor)
        this.physics.add.existing(this.eighthPlat, true)
        this.physics.add.collider(this.eighthPlat, this.player)
        
        this.ninthPlat = this.add.rectangle(120,170,50,10,this.blockColor)
        this.physics.add.existing(this.ninthPlat, true)
        this.physics.add.collider(this.ninthPlat, this.player)

        this.tenthPlat = this.add.rectangle(320,150,80,10,this.blockColor)
        this.physics.add.existing(this.tenthPlat, true)
        this.physics.add.collider(this.tenthPlat, this.player)
        
        this.eleventhPlat = this.add.rectangle(540,100,50,10,this.blockColor)
        this.physics.add.existing(this.eleventhPlat, true)
        this.physics.add.collider(this.eleventhPlat, this.player)
        
        this.twelfthPlat = this.add.rectangle(120,100,50,10,this.blockColor)
        this.physics.add.existing(this.twelfthPlat, true)
        this.physics.add.collider(this.twelfthPlat, this.player)
        
        this.topPlat = this.add.rectangle(120,50,50,10,this.blockColor)
        this.physics.add.existing(this.topPlat, true)
        this.physics.add.collider(this.topPlat, this.player)
        
        this.bottomPlat = this.add.rectangle(740,460,50,10,this.blockColor)
        this.physics.add.existing(this.bottomPlat, true)
        this.physics.add.collider(this.bottomPlat, this.player)

        this.leftWall = this.add.rectangle(50,250,100,500,this.wallColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.player)

        this.bottomRightWall = this.add.rectangle(775,450,50,150,this.wallColor)
        this.physics.add.existing(this.bottomRightWall, true)
        this.physics.add.collider(this.bottomRightWall, this.player)
        
        this.middleRightWall = this.add.rectangle(775,250,50,200,this.wallColor)
        this.physics.add.existing(this.middleRightWall, true)
        this.physics.add.collider(this.middleRightWall, this.player)
        
        this.topRightWall = this.add.rectangle(775,50,50,150,this.wallColor)
        this.physics.add.existing(this.topRightWall, true)
        this.physics.add.collider(this.topRightWall, this.player)
        
        this.skyWall = this.add.rectangle(575,100,50,200,this.wallColor)
        this.physics.add.existing(this.skyWall, true)
        this.physics.add.collider(this.skyWall, this.player)

        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"icetower2_4from3"})
            this.scene.sleep("icetower2_4from3")
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

        if (character.x > 785 && character.y > 250) {
            this.scene.start("icetower3")
        }
        if (character.x > 785 && character.y < 250) {
            this.scene.start("icetower3from4")
        }
        if (character.y < 20) {
            this.scene.start("icetower5")
        }
        if (character.y > 480 && character.x > 400) {
            this.scene.start("icetower1from2")
        }
        if (character.y > 480 && character.x <= 400) {
            this.scene.start("icetower1from4")
        }
    }
}