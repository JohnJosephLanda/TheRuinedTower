import Phaser from 'phaser'

import TitleScreen from './scenes/TitleScreen'
import LevelSelect from './scenes/LevelSelect'
import Start from './scenes/NormalTower/Start'
import Startfrom1 from './scenes/NormalTower/Startfrom1'
import Tower1 from './scenes/NormalTower/Tower1'
import Tower1from2 from './scenes/NormalTower/Tower1from2'
import Tower1from4 from './scenes/NormalTower/Tower1from4'
import Tower2_4 from './scenes/NormalTower/Tower2_4'
import Tower3 from './scenes/NormalTower/Tower3'
import Tower3from4 from './scenes/NormalTower/Tower3from4'
import Tower2_4from3 from './scenes/NormalTower/Tower2_4from3'
import Tower2_4fromBottom3 from './scenes/NormalTower/Tower2_4fromBottom3'
import Tower5 from './scenes/NormalTower/Tower5'
import Tower5fromTop from './scenes/NormalTower/Tower5fromTop'
import TowerTop from './scenes/NormalTower/TowerTop'
import End from './scenes/NormalTower/End'
import Pause from './scenes/Pause'

// var audio = new Audio("../media/badGuyHere.wav");
// audio.muted = true;
// audio.play();

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    backgroundColor: '#333333',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: false
        }
    },

    scale: {
        mode: Phaser.Scale.RESIZE,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
}

const game = new Phaser.Game(config)

// "global" screens
game.scene.add('titlescreen',TitleScreen)
game.scene.add('levelselect',LevelSelect)
game.scene.add("pauseScreen",Pause)

// normal tower
game.scene.add("startingPoint",Start)
game.scene.add("startingPointfrom1",Startfrom1)
game.scene.add("tower1",Tower1)
game.scene.add("tower1from2",Tower1from2)
game.scene.add("tower1from4",Tower1from4)
game.scene.add("tower2_4",Tower2_4)
game.scene.add("tower3",Tower3)
game.scene.add("tower3from4",Tower3from4)
game.scene.add("tower2_4from3",Tower2_4from3)
game.scene.add("tower2_4frombottom3",Tower2_4fromBottom3)
game.scene.add("tower5",Tower5)
game.scene.add("tower5fromtop",Tower5fromTop)
game.scene.add("towertop",TowerTop)
game.scene.add("endingPoint",End)

// ice tower
// need to make

// easy tower
// need to make

game.scene.start("titlescreen");
// game.scene.start("towertop"); // temp to work on level
