let cash = 100
let price = 200

if (cash > price) {
    console.log(`you paid extra - here's ${cash - price} change`)
}

else if (cash === price) {
    console.log (`you paid the exact amount - have a nice da`)
}

else {
    console.log (`not enough money - you still owe ${price - cash} dollars`)
}