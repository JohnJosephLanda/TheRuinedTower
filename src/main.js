import Phaser from 'phaser'

import TitleScreen from './scenes/TitleScreen'
import LevelSelect from './scenes/LevelSelect'
import Pause from './scenes/Pause'

import EasyStart from './scenes/EasyTower/Start'
import EasyStartfrom1 from './scenes/EasyTower/Startfrom1'
import EasyTower1 from './scenes/EasyTower/Tower1'
import EasyTower1from2 from './scenes/EasyTower/Tower1from2'
import EasyTower1from4 from './scenes/EasyTower/Tower1from4'
import EasyTower2_4 from './scenes/EasyTower/Tower2_4'
import EasyTower3 from './scenes/EasyTower/Tower3'
import EasyTower3from4 from './scenes/EasyTower/Tower3from4'
import EasyTower2_4from3 from './scenes/EasyTower/Tower2_4from3'
import EasyTower2_4fromBottom3 from './scenes/EasyTower/Tower2_4fromBottom3'
import EasyTower2_4from5 from './scenes/EasyTower/Tower2_4from5'
import EasyTower5 from './scenes/EasyTower/Tower5'
import EasyTower5fromTop from './scenes/EasyTower/Tower5fromTop'
import EasyTowerTop from './scenes/EasyTower/TowerTop'
import EasyEnd from './scenes/EasyTower/End'

import IceStart from './scenes/IceTower/Start'
import IceStartfrom1 from './scenes/IceTower/Startfrom1'
import IceTower1 from './scenes/IceTower/Tower1'
import IceTower1from2 from './scenes/IceTower/Tower1from2'
import IceTower1from4 from './scenes/IceTower/Tower1from4'
import IceTower2_4 from './scenes/IceTower/Tower2_4'
import IceTower3 from './scenes/IceTower/Tower3'
import IceTower3from4 from './scenes/IceTower/Tower3from4'
import IceTower2_4from3 from './scenes/IceTower/Tower2_4from3'
import IceTower2_4fromBottom3 from './scenes/IceTower/Tower2_4fromBottom3'
import IceTower2_4from5 from './scenes/IceTower/Tower2_4from5'
import IceTower5 from './scenes/IceTower/Tower5'
import IceTower5fromTop from './scenes/IceTower/Tower5fromTop'
import IceTowerTop from './scenes/IceTower/TowerTop'
import IceEnd from './scenes/IceTower/End'

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
import Tower2_4from5 from './scenes/NormalTower/Tower2_4from5'
import Tower5 from './scenes/NormalTower/Tower5'
import Tower5fromTop from './scenes/NormalTower/Tower5fromTop'
import TowerTop from './scenes/NormalTower/TowerTop'
import End from './scenes/NormalTower/End'

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
game.scene.add("tower2_4from5",Tower2_4from5)
game.scene.add("tower5",Tower5)
game.scene.add("tower5fromtop",Tower5fromTop)
game.scene.add("towertop",TowerTop)
game.scene.add("endingPoint",End)

// ice tower
game.scene.add("icestartingPoint",IceStart)
game.scene.add("icestartingPointfrom1",IceStartfrom1)
game.scene.add("icetower1",IceTower1)
game.scene.add("icetower1from2",IceTower1from2)
game.scene.add("icetower1from4",IceTower1from4)
game.scene.add("icetower2_4",IceTower2_4)
game.scene.add("icetower3",IceTower3)
game.scene.add("icetower3from4",IceTower3from4)
game.scene.add("icetower2_4from3",IceTower2_4from3)
game.scene.add("icetower2_4frombottom3",IceTower2_4fromBottom3)
game.scene.add("icetower2_4from5",IceTower2_4from5)
game.scene.add("icetower5",IceTower5)
game.scene.add("icetower5fromtop",IceTower5fromTop)
game.scene.add("icetowertop",IceTowerTop)
game.scene.add("iceendingPoint",IceEnd)

// easy tower
game.scene.add("easystartingPoint",EasyStart)
game.scene.add("easystartingPointfrom1",EasyStartfrom1)
game.scene.add("easytower1",EasyTower1)
game.scene.add("easytower1from2",EasyTower1from2)
game.scene.add("easytower1from4",EasyTower1from4)
game.scene.add("easytower2_4",EasyTower2_4)
game.scene.add("easytower3",EasyTower3)
game.scene.add("easytower3from4",EasyTower3from4)
game.scene.add("easytower2_4from3",EasyTower2_4from3)
game.scene.add("easytower2_4frombottom3",EasyTower2_4fromBottom3)
game.scene.add("easytower2_4from5",EasyTower2_4from5)
game.scene.add("easytower5",EasyTower5)
game.scene.add("easytower5fromtop",EasyTower5fromTop)
game.scene.add("easytowertop",EasyTowerTop)
game.scene.add("easyendingPoint",EasyEnd)

game.scene.start("titlescreen");
// game.scene.start("towertop"); // temp to work on level
