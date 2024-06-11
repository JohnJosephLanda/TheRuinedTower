import Phaser from "phaser"
import sound from "../media/badGuyHere.wav"

export default class TitleScreen extends Phaser.Scene {
    
    create() {
        const title = this.add.text(400, 150, "The Ruined Tower", { font: "80px Garamond",fill: 'white' })
        title.setOrigin(.5,.5)

        //const controls = this.add.text(400, 250, "Controls: arrow keys for movement, esc to pause", { font: "40px Garamond",fill: 'white', style:'italic' })
        //controls.setOrigin(.5,.5)

        this.easy = this.add.text(150, 250, 'Easy', { font: "40px Garamond",fill: '#AAABAF',c, backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '100', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("startingPoint") )
        .on('pointerover', () => this.enterButtonHoverState(this.easy) )
        .on('pointerout', () => this.enterButtonRestState(this.easy) )

        this.normal = this.add.text(325, 250, 'Normal', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '150', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("startingPoint") )
        .on('pointerover', () => this.enterButtonHoverState(this.normal) )
        .on('pointerout', () => this.enterButtonRestState(this.normal) )

        this.ice = this.add.text(550, 250, 'Ice', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '100', align: 'center' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start("startingPoint") )
        .on('pointerover', () => this.enterButtonHoverState(this.ice) )
        .on('pointerout', () => this.enterButtonRestState(this.ice) )
    }

    enterButtonHoverState(btn) {
        btn.setStyle({ fill: 'red', backgroundColor: '#3A3A3A'});
      }
    
      enterButtonRestState(btn) {
        btn.setStyle({ fill: '#AAABAF', backgroundColor: '#414141' });


      }
}