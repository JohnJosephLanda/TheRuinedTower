import Phaser from "phaser"

export default class TitleScreen extends Phaser.Scene
{
    preload()
    {
      this.load.image('back', './wall.png');
    }

    create()
    {
      // this.add.image(600, 330, 'back').setScale(1.45).setOrigin(.5, .5);
      const text = this.add.text(400, 150, "The Ruined Tower", { font: "80px Arial",fill: 'white' })
      text.setOrigin(.5,.5)

      this.clickButton = this.add.text(350, 250, 'Start!', { font: "40px Arial",fill: '#AAABAF',style:"italic" })
     .setInteractive()
     .on('pointerdown', () => this.scene.start("startingPoint") )
     .on('pointerover', () => this.enterButtonHoverState() )
     .on('pointerout', () => this.enterButtonRestState() );
    }

    enterButtonHoverState() {
        this.clickButton.setStyle({ fill: '#484849'});
      }
    
      enterButtonRestState() {
        this.clickButton.setStyle({ fill: '#AAABAF' });
      }
}