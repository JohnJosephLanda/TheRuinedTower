import Phaser from "phaser"

import Player from "../../sprites/Player.js"
import player from "../../sprites/PlayerStylesheet.png"
import bg0 from "../../media/skybg.png" 
import Timer from "../Time.js";

export default class SpeedrunTowerTop extends Phaser.Scene
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
            y:90,
            img: 'player'
        }),true)
        this.physics.add.existing(this.player)
        this.player.body.setCollideWorldBounds(true, 0, 0)
        this.player.setScale(.13,.13)

        this.wallColor = 0x696567
        this.blockColor = 0x91917e
        
        this.leftWall = this.add.rectangle(50,300,100,400,this.wallColor)
        this.physics.add.existing(this.leftWall, true)
        this.physics.add.collider(this.leftWall, this.player)

        this.firstPlat = this.add.rectangle(130,90,50,20,this.blockColor)
        this.physics.add.existing(this.firstPlat, true)
        this.physics.add.collider(this.firstPlat, this.player)

        this.secondPlat = this.add.rectangle(170,70,50,20,this.blockColor)
        this.physics.add.existing(this.secondPlat, true)
        this.physics.add.collider(this.secondPlat, this.player)

        this.thirdPlat = this.add.rectangle(210,50,50,20,this.blockColor)
        this.physics.add.existing(this.thirdPlat, true)
        this.physics.add.collider(this.thirdPlat, this.player)

        this.fourthPlat = this.add.rectangle(250,30,50,20,this.blockColor)
        this.physics.add.existing(this.fourthPlat, true)
        this.physics.add.collider(this.fourthPlat, this.player)
        
        this.cursors = this.input.keyboard.createCursorKeys()
        this.pauseButton = this.add.text(0, 10, '▐▐', { font: "30px Garamond",fill: '585859',style:"italic", fixedHeight: '35', fixedWidth: '80', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => { 
            let paused = true
            this.scene.launch("pauseScreen",{scene:"speedruntowertop"})
            this.scene.sleep("speedruntowertop")
            while (this.scene.isSleeping()) {
                this.player.body.setVelocity(0)
            }
        } )
        
        this.player.play('idle',true)

        // TIMER

        this.timerText = this.add.text(25, 50, "", { font: "30px Garamond", fill: 'white' })
        this.timerOn = true;
        this.currentMins = 0;
        this.currentSecs = 0;
        this.minsDisplay = "";
        this.secsDisplay = "";
        this.overallDisplay = "";


        this.time.addEvent({
            delay: 1000,
            callback: this.timerFunc,
            callbackScope: this,
            loop: true
        });

    }


    timerFunc(){

        if (this.timerOn){

            if (this.currentSecs == 59){
                this.currentSecs = 0;
                this.currentMins++;
            } else {
                this.currentSecs++;
            }

            if (this.currentSecs < 10){
                this.secsDisplay = "0" + String(this.currentSecs);
            } else {
                this.secsDisplay = "" + String(this.currentSecs);
            }

            this.minsDisplay = "" + String(this.currentMins);

            this.overallDisplay = String(this.minsDisplay) + ":" + String(this.secsDisplay);

            this.timerText.setText(this.overallDisplay);

        }

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
            localStorage.setItem(14, this.overallDisplay);
            this.scene.start("speedruntower5fromtop")
        }
        if (character.y < 20) {
            this.scene.start("speedrunendingPoint")
        }
    }
}