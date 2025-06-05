
let time_hours = document.getElementById('time_hore');
let time_minets = document.getElementById('time_minets');
let time_sacend = document.getElementById('time_sacend');
export let TotleTime = 600;
export function timer() {
    let t =  setInterval(() => {
        if (TotleTime <= 0) {
            TotleTime = 600; 
            return;
        }
        TotleTime --;
        let hour = Math.floor((TotleTime / 3600) % 60);
        let minuts = Math.floor((TotleTime / 60) % 60);
        let second = Math.floor(TotleTime % 60);
        
        time_hours.innerHTML = hour;
        time_minets.innerHTML = minuts;
        time_sacend.innerHTML = second;

        
        console.log(TotleTime);
        

        
        
    }, 1000);
    
};

