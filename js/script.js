let coins=
Number(
localStorage.coins||0
)

let power=
Number(
localStorage.power||1
)

let level=
Number(
localStorage.level||1
)

let price=
Number(
localStorage.price||10
)



let energy=
Number(
localStorage.energy||100
)

let regen=
Number(
localStorage.regen||3
)

let energyPrice=
Number(
localStorage.energyPrice||50
)



let last=
Number(
localStorage.last||Date.now()
)



let hours=

Math.floor(
(
Date.now()-last
)
/3600000
)



energy=

Math.min(
100,
energy+
hours*
regen
)



function save(){

localStorage.coins=coins

localStorage.power=power

localStorage.level=level

localStorage.price=price

localStorage.energy=energy

localStorage.regen=regen

localStorage.energyPrice=energyPrice

localStorage.last=
Date.now()

}



function render(){

coinText.innerText=
coins

power.innerText=
window.power

price.innerText=
window.price

energy.innerText=
window.energy

regen.innerText=
window.regen

energyPrice.innerText=
window.energyPrice


fill.style.width=

(
window.energy
)+"%"

}



tap.onclick=()=>{


if(
energy<=0
)
return


coins+=power

energy--


save()

render()

}



buyPower.onclick=()=>{


if(
coins<
price
)
return


coins-=price


power++


level++


price*=2


save()

render()

}



buyEnergy.onclick=()=>{


if(
coins<
energyPrice
)
return


coins-=energyPrice


regen++


// 50
// 125
// 312

energyPrice=

Math.floor(
energyPrice*
2.5
)


save()

render()

}



render()
