import Phaser from "phaser"

export default class TitleScreen extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const text = this.add.text(400, 250, "The Ruined Tower")
        text.setOrigin(.5,.5)
    }
}