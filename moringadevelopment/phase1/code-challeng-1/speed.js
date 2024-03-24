//Import module,,,an environment for js

const readline = require(`readline`);

//create input interface
const rl =readline.createInterface({
    //take input from the user
    input:process.stdin,
    //take output from the user
    output: process.stdout
});

//function that calculate the demerit points
function calculateDemeritPoints(speed){

    //speed limit (km/hr)
    const speedLimit = 70;

    let demeritPoints;

    //check the speed 
    if (speed > speedLimit){

        //calculate the demerit points based on speed 
        demeritPoints = math.floor((speed - speedLimit) / 5);
        
    }
    //resuls of the demerit points
    return demeritPoints;
}

//function to process the progress
function main(){
    //ask the speed of a car
    rl.question("Enter the speed (km/hr) =", (speed) => {

        //put it to actual number
        speed = parseInt(speed);
        //calculate the demerit points based on entered speed
        demeriPoints = calculateDemeritPoints(speed);

        //check the demerit points
        if (demeriPoints > 0) {
            //display the total points
            console.log("points:", demeritPoints);

            //check if demerit points are above 12
            if (demeritPoints >12){
                //disply license are suspended
                console.log("licenseSuspended");
            }
        }
       // })
            else{
                //print ok if there is no demerit points
                console.log("Ok");
            }
            
          
            

            rl.close();
     })
    }

    //call main function to execute program

    main();

