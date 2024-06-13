import Phaser from "phaser"
import sound from "../media/badGuyHere.wav"
import bg0 from "../media/wall.png"

export default class TitleScreen extends Phaser.Scene {
    
    create() {
        this.width = this.cameras.main.width
        this.height = this.cameras.main.height

        this.bg = this.add.image(0,0,'back')
        this.bg.setOrigin(0, 0)

        const title = this.add.text(400, 150, "The Ruined Tower", { font: "80px Garamond",fill: 'white' })
        title.setOrigin(.5,.5)

        const controls = this.add.text(400, 200, "Controls: arrow keys for movement, esc to pause", { font: "20px Garamond",fill: 'white', style:'italic' })
        controls.setOrigin(.5,.5)

        this.easy = this.add.text(150, 250, 'Easy', { font: "40px Garamond",fill: '#AAABAF', backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '100', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("easystartingPoint") )
        .on('pointerover', () => this.enterButtonHoverState(this.easy) )
        .on('pointerout', () => this.enterButtonRestState(this.easy) )

        this.normal = this.add.text(325, 250, 'Normal', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '150', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("startingPoint") )
        .on('pointerover', () => this.enterButtonHoverState(this.normal) )
        .on('pointerout', () => this.enterButtonRestState(this.normal) )

        this.ice = this.add.text(550, 250, 'Ice', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '100', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("icestartingPoint") )
        .on('pointerover', () => this.enterButtonHoverState(this.ice) )
        .on('pointerout', () => this.enterButtonRestState(this.ice) )

        this.practice = this.add.text(225, 325, 'Practice', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '140', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("practice") )
        .on('pointerover', () => this.enterButtonHoverState(this.practice) )
        .on('pointerout', () => this.enterButtonRestState(this.practice) )
        
        this.speedrun = this.add.text(435, 325, 'Speedrun', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '170', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("speedrunstartingPoint") )
        .on('pointerover', () => this.enterButtonHoverState(this.speedrun) )
        .on('pointerout', () => this.enterButtonRestState(this.speedrun) )
    }

    enterButtonHoverState(btn) {
        btn.setStyle({ fill: 'red', backgroundColor: '#3A3A3A'});
      }
    
      enterButtonRestState(btn) {
        btn.setStyle({ fill: '#AAABAF', backgroundColor: '#414141' });
      }
}