let coins=

Number(
localStorage.coins||0
)

let power=

Number(
localStorage.power||1
)

let powerLevel=

Number(
localStorage.level||1
)

let powerPrice=

Number(
localStorage.price||10
)



let last=

Number(
localStorage.last||Date.now()
)



// ماین آفلاین

let passed=

Math.floor(
(
Date.now()-last
)
/10000
)

coins+=passed



let tap=

document.getElementById(
"tap"
)



let coinText=

document.getElementById(
"coinText"
)



let levelText=

document.getElementById(
"powerLevel"
)



let priceText=

document.getElementById(
"powerPrice"
)



tap.onclick=()=>{

coins+=power


tap.classList.add(
"pop"
)


setTimeout(()=>{

tap.classList.remove(
"pop"
)

},80)



save()

render()

}



document
.getElementById(
"powerBtn"
)

.onclick=()=>{


if(
coins<
powerPrice
)

return


coins-=

powerPrice


power++

powerLevel++


// گرون شدن

powerPrice=

Math.floor(
powerPrice*2.2
)


save()

render()

}



function render(){

coinText.innerText=

coins


levelText.innerText=

powerLevel


priceText.innerText=

powerPrice

}



function save(){

localStorage.coins=

coins


localStorage.power=

power


localStorage.level=

powerLevel


localStorage.price=

powerPrice


localStorage.last=

Date.now()

}



render()
