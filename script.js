let prevNumber = 0;
let calculationOperator = "";
let currentNumber = 0;

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
        // console.log(currentNumber)
        // console.log(calculatorScreen.value)

    })
})

// const calculatorScreen = document.querySelectorAll(".ca  lculator-screen")
const calculatorScreen = document.getElementById("calcu")


const updateScreen = (number) => {
    // calculatorScreen.value = number
    calculatorScreen.setAttribute('value', number)
    console.log(calculatorScreen.value)
}

const inputNumber = (number) =>{
    if(currentNumber === "0"){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) =>{
    if (calculationOperator === ""){
        prevNumber = currentNumber;
        
    }
    calculationOperator = operator;
    currentNumber = "";
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    console.log("equal buton is pressed")
    calculate()
    updateScreen(currentNumber)
    
})

const calculate = () =>{
    let result = "";
    switch(calculationOperator){
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case  "/": 
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
}

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click",() =>{
    clearAll()
    updateScreen(currentNumber)
    console.log("AC button is pressed")
})

const clearAll = ()=>{
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";

}

const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (evemt)=>{
    inputDecimal(evemt.target.value)
    updateScreen(currentNumber)
    console.log(evemt.target.value)
})

inputDecimal = (dot) =>{
    if (currentNumber.includes(".")){
        return
    }else{
        currentNumber += dot
    }
}