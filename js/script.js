let coins=
parseInt(
localStorage.getItem(
"coins"
)
)||0


let power=
parseInt(
localStorage.getItem(
"power"
)
)||1


let level=
parseInt(
localStorage.getItem(
"level"
)
)||1


let price=
parseInt(
localStorage.getItem(
"price"
)
)||10



const coinText=
document.getElementById(
"coinText"
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

}



function render(){

coinText.textContent=
coins

powerText.textContent=
power

levelText.textContent=
level

priceText.textContent=
price

}



document
.getElementById(
"tap"
)

.addEventListener(
"click",

()=>{

coins+=power

save()

render()

}
)



document
.getElementById(
"buyPower"
)

.addEventListener(
"click",

()=>{

if(
coins<
price
)
return



coins-=price


level++


power++


// 10 → 20 → 40 → 80

price*=2


save()

render()

}
)



render()
