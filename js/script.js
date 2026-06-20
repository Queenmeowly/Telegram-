let coins=

Number(
localStorage.getItem(
"coins"
)||0
)

let power=

Number(
localStorage.getItem(
"power"
)||1
)

let level=

Number(
localStorage.getItem(
"level"
)||1
)

let price=

Number(
localStorage.getItem(
"price"
)||10
)



const tap=

document.getElementById(
"tap"
)

const coinText=

document.getElementById(
"coinText"
)

const coinSmall=

document.getElementById(
"coinSmall"
)

const powerValue=

document.getElementById(
"powerValue"
)

const powerLevel=

document.getElementById(
"powerLevel"
)

const upgradeLevel=

document.getElementById(
"upgradeLevel"
)

const upgradePrice=

document.getElementById(
"upgradePrice"
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

coinText.innerText=

coins


coinSmall.innerText=

coins


powerValue.innerText=

power


powerLevel.innerText=

level


upgradeLevel.innerText=

level


upgradePrice.innerText=

price

}



tap.onclick=()=>{

coins+=power

save()

render()

}



document
.getElementById(
"upgradePower"
)

.onclick=()=>{


if(
coins<
price
){

return

}



coins-=price


level++


power++


price=

Math.floor(
price*2
)


save()

render()

}



render()
