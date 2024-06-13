export default class Time {

    constructor(){
        this.list = [];
    }

    addTimeToLst(time){
        this.list[this.list.length - 1] = time;
    }

    sumofLst(){
        s = 0;
        for (let i = 0; i < this.list.length; i++){
            s += this.list[i];
        }
        return s;
    }

    timerFunction(){
        
        if (currentSecs == 59){
            currentSecs = 0;
            currentMins++;
        } else {
            currentSecs++;
        }

        if (currentSecs < 10){
            secsDisplay = "0" + String(currentSecs);
        } else {
            secsDisplay = "" + String(currentSecs);
        }

        minsDisplay = "" + String(currentMins);

        overallDisplay = minsDisplay + ":" + secsDisplay;

        return overallDisplay;



    }



}