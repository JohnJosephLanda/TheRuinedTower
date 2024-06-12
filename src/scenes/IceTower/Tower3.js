import Phaser from "phaser"

import Player from "../../sprites/Player.js"
import player from "../../sprites/PlayerStylesheet.png"
import bg0 from "../../media/skybg.png" 

export default class IceTower3 extends Phaser.Scene
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
            y:360,
            img: 'player'
        }),true)
        this.physics.add.existing(this.player)
        this.player.body.setCollideWorldBounds(true, 0, 0)
        this.player.setScale(.13,.13)

        this.wallColor = 0x597175
        this.blockColor = 0x95bfc7

        this.firstPlat = this.add.rectangle(110,400,40,10,this.blockColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.player)
        
        this.secondPlat = this.add.rectangle(270,400,30,10,this.blockColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.player)
        
        this.thirdPlat = this.add.rectangle(350,360,30,10,this.blockColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.player)
        
        this.fourthPlat = this.add.rectangle(400,320,30,10,this.blockColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.player)
        
        this.fifthPlat = this.add.rectangle(500,320,20,10,this.blockColor)
        this.physics.add.existing(this.fifthPlat, true)
        this.physics.add.collider(this.fifthPlat, this.player)
        
        this.sixthPlat = this.add.rectangle(530,280,20,10,this.blockColor)
        this.physics.add.existing(this.sixthPlat, true)
        this.physics.add.collider(this.sixthPlat, this.player)
        
        this.seventhPlat = this.add.rectangle(500,250,20,10,this.blockColor)
        this.physics.add.existing(this.seventhPlat, true)
        this.physics.add.collider(this.seventhPlat, this.player)
        
        this.eigthPlat = this.add.rectangle(500,200,30,10,this.blockColor)
        this.physics.add.existing(this.eigthPlat, true)
        this.physics.add.collider(this.eigthPlat, this.player)
        
        this.topPlat = this.add.rectangle(300,180,50,10,this.blockColor)
        this.physics.add.existing(this.topPlat, true)
        this.physics.add.collider(this.topPlat, this.player)
        
        this.bottomLeftWall = this.add.rectangle(50,450,100,150,this.wallColor)
        this.physics.add.existing(this.bottomLeftWall, true)
        this.physics.add.collider(this.bottomLeftWall, this.player)
        
        this.middleLeftWall = this.add.rectangle(50,250,100,200,this.wallColor)
        this.physics.add.existing(this.middleLeftWall, true)
        this.physics.add.collider(this.middleLeftWall, this.player)
        
        this.topLeftWall = this.add.rectangle(50,50,100,150,this.wallColor)
        this.physics.add.existing(this.topLeftWall, true)
        this.physics.add.collider(this.topLeftWall, this.player)

        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"tower3"})
            this.scene.sleep("tower3")
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

        if (character.x < 5 && character.y > 250) {
            this.scene.start("icetower2_4frombottom3")
        }
        else if (character.x < 5) {
            this.scene.start("icetower2_4from3")
        }
        if (character.y > 480) {
            this.scene.start("icestartingPoint")
        }
    }
}