import Phaser from "phaser"
import sound from "../media/badGuyHere.wav"

export default class TitleScreen extends Phaser.Scene
{
    preload()
    {
      this.load.image('back', 'wall.png');
    }

    create()
    {
      const title = this.add.text(400, 150, "The Ruined Tower", { font: "80px Garamond",fill: 'white' })
      title.setOrigin(.5,.5)

      this.clickButton = this.add.text(350, 250, 'Start!', { font: "40px Garamond",fill: '#AAABAF',style:"italic", backgroundColor: '#484849', fixedHeight: '40', fixedWidth: '100', align: 'center' })
      .setInteractive()
      .on('pointerdown', () => this.scene.start("levelselect") )
      .on('pointerover', () => this.enterButtonHoverState() )
      .on('pointerout', () => this.enterButtonRestState() )
    }

    enterButtonHoverState() {
        this.clickButton.setStyle({ fill: 'red', backgroundColor: '#3A3A3A'});
      }
    
      enterButtonRestState() {
        this.clickButton.setStyle({ fill: '#AAABAF', backgroundColor: '#414141' });


      }
}