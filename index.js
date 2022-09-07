const inputField = document.getElementById("input-field")
const submitBtn = document.getElementById("convert-el")
let metersEl = document.getElementById("meters")
let feetEl = document.getElementById("feet")
let litresEl = document.getElementById("litres")
let gallonsEl = document.getElementById("gallons")
let kilogramEl = document.getElementById("kilograms")
let poundsEl = document.getElementById("pounds")
let clearBtn = document.getElementById("clear")
let result = ""




function meters(){
    let result = inputField.value*3.28084
    result = result.toFixed(3)
    metersEl.textContent = `${inputField.value} meters= ${result} feet`
}

function feet(){
   let result = inputField.value/3.28084
      result = result.toFixed(3)
    feetEl.textContent = `| ${inputField.value} feet= ${result} meters`
}
function litres(){
    let result = inputField.value*4.546
      result = result.toFixed(3)
     litresEl.textContent = `${inputField.value} gallons= ${result} litres `
}

function gallons(){
    let result = inputField.value/4.546
   result = result.toFixed(3)
     gallonsEl.textContent = `| ${inputField.value} litres= ${result} gallons`
}

function kilograms(){
    let result = inputField.value/2.205
  result = result.toFixed(3)
   kilogramEl.textContent = `${inputField.value} pounds= ${result} kilograms`
}
function pounds(){
     let result = inputField.value*2.205
    result = result.toFixed(3)
     poundsEl.textContent = `| ${inputField.value} kilograms= ${result} pounds`

}


submitBtn.addEventListener( "click", function(){
    meters()
    feet()
    gallons()
    litres()
    kilograms()
    pounds()

})

clearBtn.addEventListener( "click", function(){
    poundsEl.textContent = ""
    kilogramEl.textContent = ""
    metersEl.textContent =""
    feetEl.textContent =""
    gallonsEl.textContent =""
    litresEl.textContent =""
    kilogramEl.textContent =""
    poundsEl.textContent =""
    inputField.value= ""
})

