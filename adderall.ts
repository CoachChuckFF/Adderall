// Move the mouse across the screen as a sine wave.
import robot from "robotjs";
 
function sleep(ms:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function moveMouse(jumps:number){
    let newMousePos = robot.getMousePos();
    for (let i = 0; i < jumps; i++)
    {
        robot.moveMouse(
            newMousePos.x + Math.floor((Math.random() - 0.5) * 30),
            newMousePos.y + Math.floor((Math.random() - 0.5) * 30),
        );
    }
}

async function main(secondsTillTimeOut:number){
    let ticker = 0;
    let lastMousePos = robot.getMousePos();

    while(1){
        let newMousePos = robot.getMousePos();
        if(lastMousePos.x !== newMousePos.x || lastMousePos.y !== newMousePos.y){
            lastMousePos = newMousePos;
            ticker = secondsTillTimeOut;
        }

        if(ticker-- <= 0){
            console.log("Moving...");
            ticker = secondsTillTimeOut;
            moveMouse(1);
        }

        await sleep(1000);
    }
}

console.log("Adderall kicking in...");
main(60*2);