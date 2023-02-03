
let billInput = document.getElementById("billTotalInput")
let tipInput = document.getElementById("tipInput")
let people = document.getElementById("numberOfPeople")
let personTotal = document.getElementById("perPersonTotal")

let number = Number(people.innerText)

const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value)

    // get the tip from user & convert it into a percentage (divide by 100)
    let tipPercentage = Number(tipInput.value) / 100

    // get the total tip amount
    let tipTotal = bill * tipPercentage

    // calculate the total (tip amount + bill)
    let total = tipTotal + bill


    // calculate the per person total (total divided by number of people)
    let perPersonTotal = total / number


    // update the perPersonTotal on DOM & show it to user
    personTotal.innerText = `$${perPersonTotal.toFixed(2).toLocaleString("en-US")}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people
    number += 1

    // update the DOM with the new number of people
    people.textContent = number

    // calculate the bill based on the new number of people
    calculateBill()
}

const decreasePeople = () => {
   
    const hideError = () => {
        document.getElementById("error").textContent = " ";
    }
    if (number <= 1) {
        document.getElementById("error").textContent = "You can't have less than one person";
        document.getElementById("error").style.color = "red";
        setTimeout(hideError, 2000);
        return
    }
    number -= 1

    people.textContent = number

    // calculate the bill based on the new number of people
    calculateBill()

}