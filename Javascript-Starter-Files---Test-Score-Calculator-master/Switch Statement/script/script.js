var subject, totalQuestions, numCorrect, percentScore;

function testResults(){
subject = document.getElementById("subject").value;
totalQuestions = document.getElementById("numberOfQuestions").value;
numCorrect = document.getElementById("numberCorrect").value;

percentScore = numCorrect/totalQuestions*100;
percentScore = percentScore.toFixed(2);

//Grades
var GradeA = 90;
var GradeB = 80;
var GradeC = 70;
var GradeD = 60;

switch(true){
    case percentScore >= GradeA:
        document.getElementById("testResults").innerHTML = "A"
        document.getElementById("testMessage").innerHTML = `Excellent Job. You got ${percentScore}% correct. That's an 'A' for awesome!`
            break;

     case percentScore >= GradeB:
        document.getElementById("testResults").innerHTML = "B"
         document.getElementById("testMessage").innerHTML = `Cool you got ${percentScore}% correct. That's a 'B' which is good.`
                    break;

    case percentScore >= GradeC:
        document.getElementById("testResults").innerHTML = "C"
        document.getElementById("testMessage").innerHTML = `BRUH you got a ${percentScore}% correct. That's a 'C' how do you get a 'C' what???`
            break;

            case percentScore >= GradeD:
                document.getElementById("testResults").innerHTML = "D"
                document.getElementById("testMessage").innerHTML = `You. You got ${percentScore}% correct. That's a D. You kinda suck.`
                    break;

                    case percentScore < GradeD:
                        document.getElementById("testResults").innerHTML = "A"
                        document.getElementById("testMessage").innerHTML = `YOU REALLY GOT  ${percentScore}% RIGHT HUH?? YOUR A FAILIURE SUCKS TO SUCK HAHAHAHAHAHA LOSER!!!`
                            break;

            default:
                alert("This is the default!!!");


}



}







//ToDo - this goes inside the testResults() function
    //! Add Switch Statement that checks the condition of the grade. For each grade change the out of the html id's of "testResults" and "testMessage".
    //? note you are just checking to see if a condition is true... so you may want to start with switch(true){}

  
//ToDo - New Function
// Create a function called clearResults() that resets the forms values. 
