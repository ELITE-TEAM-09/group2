//import the module
const readline = require(`readline`);

//interface
const rl = readline.createInterface({
    //standard input
    input: process.stdin,
    //standard output
    output: process.stdout
});

//calculate grade based on marks
function calculateGrade(marks){
    //input mark between 0 to 100 to give a grade
    if (marks >79 && marks <=100){
        return "A";
    }else if (marks >=60 && marks <=79){
        return "B";
    }else if (marks >49 && marks <=59){
        return "C";
    }
    else if (marks >=40 && marks <=49){
        return "D";
    }
    else if (marks <40 && marks >=0){
        return "E";
    }else{
      return"Enter marks ranging between 0 and 100";
    }
}

//ask for input
rl.question(`Enter marks:`,(input) => {
    //put to actual number
    let marks = parseFloat(input);

    //test if its valid
    if (!isNaN(marks)){
        //check if its between 0 to 100
        if (marks >=0 && marks <=100){
            //calculate
            let grade = calculateGrade(marks);

            //display results
        console.log("Grade: ",grade);
        }else{
          //display marks if its within the range 0 and 100
          console.log("Enter the marks within the range of 0 and 100");
        }  
    }else{
      //display if input is invilid
      console.log("Enter a valid number");
    }

    rl.close();
  });