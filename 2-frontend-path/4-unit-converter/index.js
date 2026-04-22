const meterOutput = document.getElementById("meter")
const volumeOutput = document.getElementById("volume")
const massOutput = document.getElementById("mass")
const errorMsg = document.querySelector(".errorMsg")

let validationInput = () => {
    const numberInput = document.getElementById("number").value
    let message

    if (!numberInput) message = "This field is required"
    else if (isNaN(numberInput) || numberInput <= 0) message = "Enter a positive number"
    else {
        message = ""
        convertionFn (numberInput)
    }
        
    errorMsg.innerText = message
    
}

let convertionFn = (number) => {
    // meter & feet
    meterOutput.innerText = `${number} meters = ${(number * 3.281).toFixed(3)} feet || ${number} feet = ${(number * 0.3048).toFixed(3)} meter`

    // liter && gallon
    volumeOutput.innerText = `${number} liters = ${(number * 0.264).toFixed(3)} gallons || ${number} gallons = ${(number * 3.785).toFixed(3)} litters`

    // kilogram && pound
    massOutput.innerText = `${number} kilos = ${(number * 2.204).toFixed(3)} pounds || ${number} pounds = ${(number * 0.453592).toFixed(3)} kilos`
}

// convert button
const convertBtn = document.getElementById("convertBtn")
convertBtn.addEventListener("click", validationInput)

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/