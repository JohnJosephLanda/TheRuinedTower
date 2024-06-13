export default class Time {

    constructor(){
        this.mins = [];
        this.secs = [];
    }

    sumofLst(){
        
        for (let i = 0; i < localStorage.length; i++){
            if (localStorage.getItem(i) != null){
                let mins = localStorage.getItem(i).split(":")[0];
                let secs = localStorage.getItem(i).split(":")[1];
                this.mins.append(mins);
                this.secs.append(secs);
            }
        }

        let totalMins = 0;
        let totalSecs = 0;

        for (let i = 0; i < this.mins.length; i++){
            totalMins += this.mins[i];
        }

        for (let i = 0; i < this.secs.length; i++){
            totalSecs += this.secs[i];
        }

        // ex
        // mins = 4
        // secs = 69

        totalMins += totalSecs / 60;
        totalSecs = totalSecs % 60;

        return [String(totalMins), String(totalSecs)];

    }

    



}