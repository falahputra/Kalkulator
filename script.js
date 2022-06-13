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
    currentNumber += number;
}




