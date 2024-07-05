const bton = document.querySelector('#calcular')
const inoutPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#cupon')
const pResult = document.querySelector('#result')
bton.addEventListener('click', sacarPorcentaje)


const cuponArray = []


cuponArray.push({ 
    name: 'Batman',
    descuento: 30,
    limit: 500
})

cuponArray.push({
    name: 'cuponx2',
    descuento: 25,
    limit: 500
})

cuponArray.push({
    name: 'cuponx3',
    descuento: 15,
    limit: 500
})

cuponArray.push({
    name: 'cuponx4',
    descuento: 10,
    limit: 500
})



function sacarPorcentaje(){
    const precio = Number(inoutPrice.value)
    const cupon = inputCoupon.value

    if (!precio || !cupon) {
        pResult.innerText('Llena el formulario alv')
        return
    }

    let discuento


    function encontrarElemento (cuponElemento){
        return cuponElemento.name == cupon
    }

    const cuponEnArray = cuponArray.find(encontrarElemento)


    if (cuponEnArray) {
        discuento = cuponEnArray.descuento
    }else{
        pResult.innerText('Cupon no valido')
    }

    console.log({
        cupon,
        discuento,
        cuponEnArray,
        cuponArray
    });






    const resultado = precio * (100 - discuento)/100
    pResult.innerText = 'El nuevo precio con descuento es: $' + resultado
}

//promedio: suma y divide. ese es el punto central 
//moda:
//mediana: el punto central. de menor a mayor. la mitad. mas confiable. y luego, ambos puntos medios, (vecinos) se suman, yse dividen. y ese es el promedio. 


//moda: cuantos elementos en una lista se repiten. 