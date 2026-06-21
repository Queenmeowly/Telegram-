let coins=
Number(
localStorage.getItem(
"coins"
)
)||0

let power=
Number(
localStorage.getItem(
"power"
)
)||1

let level=
Number(
localStorage.getItem(
"level"
)
)||1

let price=
Number(
localStorage.getItem(
"price"
)
)||10

let energy=
Number(
localStorage.getItem(
"energy"
)
)||100



const coinText=
document.getElementById(
"coinText"
)

const energyText=
document.getElementById(
"energy"
)

const powerText=
document.getElementById(
"power"
)

const levelText=
document.getElementById(
"level"
)

const priceText=
document.getElementById(
"price"
)



function save(){

localStorage.setItem(
"coins",
coins
)

localStorage.setItem(
"power",
power
)

localStorage.setItem(
"level",
level
)

localStorage.setItem(
"price",
price
)

localStorage.setItem(
"energy",
energy
)

}



function render(){

coinText.textContent=
coins

energyText.textContent=
energy

powerText.textContent=
power

levelText.textContent=
level

priceText.textContent=
price

}



tap.onclick=()=>{

if(
energy<=0
){

return

}

coins+=power

energy--

save()

render()

}



buyPower.onclick=()=>{

if(
coins<
price
){

return

}

coins-=price

power++

level++

price*=2

save()

render()

}



render()
