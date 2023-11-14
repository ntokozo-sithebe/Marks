
/*let marks = 90

switch (marks){
    case 100 :
        console.log("A+")
break;
    case 89 > 90 < 99:
        console.log("A")
break;
        case 80 >= 89:
            console.log("B")
break; 
       case 70 >= 79:
       console.log("Distinction")

break;
       case 60>=69 : 
       console.log("C+")

    break;
    case 50 >= 59 :
        console.log("Passed")
        break;
    case 49 <= 50 :
        console.log("Failed")

}*/




/* CORRECTIONS

//create a varibale for the submit button 
let btnSubmit

// create a function called displayMarks
function diplayMarks(){
    let marks = document.querySelector     //  + converts the value to a number
}

// label reference 


// switch

switch (true){
    case marks < 50:
        outerHeight.textContent = (`Sorry, you failed.Try again next time`);
        break;// purpose of break - stoping the evaluation from the first case
        case marks <= 59:
            outerHeight.textContent(`You passed`)
       break;
       case marks <= 69 : 
       outerHeight.textContent(``)*/
// same as above

//creating a variable

let btnSubmit = document.querySelector('[data-submit]')

// Create a function
function displayMarks() {
    let marks = +document.querySelector('[data-marks]').value // capturing the data

    // Labels reference
    let output = document.querySelector('[data-output]')
    // switch 
    switch (true) {
        case marks <50:
            output.textContent = `Sorry,but you failed. Try again next time.`;
        break;
        case marks <= 59:  
            output.textContent = `You passed`;
        break;
        case marks <= 69:
            output.textContent = `C+`;
        break;
        case marks <= 79:
            output.textContent = `Distinction`;
        break;
        case marks <= 89:
            output.textContent = `B+`;
        break;
        case marks <= 99:
            output.textContent = `A`;
        break;
        case marks == 100:
            output.textContent = `A+`;
        break;
        default:
             output.textContent = `You are a ghost`;
        break;
    }
}
btnSubmit.addEventListener('click', displayMarks)  // call back function