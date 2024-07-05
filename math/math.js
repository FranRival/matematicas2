console.group('Cuadrado')


const ladoCUadrado = 5
const perimetroCUadrado = ladoCUadrado*4
const areaCuadrado = ladoCUadrado*ladoCUadrado

function calcularCUadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado*lado
    }
}

console.log({
    ladoCUadrado,
    perimetroCUadrado,
    areaCuadrado
});

console.groupEnd('Cuadrado')
console.group('Triangulo')

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2


function calcularTriangulo(lado1,lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base*altura)/2
    }
}

console.groupEnd('Triangulo')

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});


console.group('Circulo')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2

const circunferencia = diametroCirculo * Math.PI
const areaCIrculo = (radioCirculo ** 2) * Math.PI

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCIrculo
});


function calcularCirculo (radio){
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio, 2)


    return {
        circunferencia: diametro *Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(4)
    }
}

console.groupEnd('Circulo')

//altura de un triangulo.

function calcularAlturaTriangulo(lados,base){

    if (lados == base) {
        console.warn('Este no es un triangulo isoseles');
    }else{
        //h = raizcuadrada(lado**2 - (b**2)/4)
        return Math.sqrt((lados **2) - ((base**2)) / 4)
    }
}

//porcentajes

function sacarPorcentaje(descuento, precio){

    const resultado = precio * (100 - descuento)/100
    return resultado
}