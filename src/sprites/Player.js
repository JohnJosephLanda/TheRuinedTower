import Phaser from "phaser"

export default class Player extends Phaser.GameObjects.Sprite {

    constructor(config) {
        super(config.scene, config.x, config.y, "player")
        config.scene.add.existing(this);
    }

    normalPhysics(cursors) {
        this.cursors = cursors
        let character = this.body
        
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
    }

    icePhysics() {
        if (this.cursors.up.isDown && (character.onFloor())) {
            character.setVelocityY(-100)
        }
        if (this.cursors.right.isDown) {
            character.setAccelerationX(20)
        }
        else if (this.cursors.left.isDown) {
            character.setAccelerationX(-20)
        }
        else {
            character.setAccelerationX(0)
        }
    }
}