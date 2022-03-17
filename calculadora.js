//Maycol Steven Rincon Bayona
//Taller de programación funcional

//SUMA
const sum = (num1, num2) => {
    return num1 + num2
}

//RESTA
const diff = (num1, num2) => {
    return num1 - num2
}

//funcion para determinar si el resultado de multiplicacion
//  y division sera negativo o positivo
const signValue = (val1, val2) => {
    if((val1 > 0 && val2 < 0) || (val1 < 0 && val2 > 0)) {
        return false
    } else {
        return true
    }
}

//Cambia el signo de un numero, sin multiplicar
const signChange = (val) => {
    return diff(0, val)
}

//Si es negativo cambia a positivo
const checkSignChange = (val) => {
    return val < 0 ? signChange(val) : val
}

//MULTIPLICACION: mediante metodo recursivo
const product = (n1, n2) => {
    if (n1 == 0 || n2 == 0) {
        return 0
    } 
    else if(signValue(n1, n2) || (n1 < 0 && n2 > 0)){

        if (n2 < 0) {
            n1 = signChange(n1)
            n2 = signChange(n2)
        }

        if (n2 == 1) {
            return n1 
        } else {
            return sum(n1, product(n1, diff(n2, 1)))
        }
        
    }

    else {

        if(n2 == -1) {
            return signChange(n1)
        } else {
            return sum(signChange(n1), product(n1, diff(n2, -1)))
        }
                
    }
}

//DIVISION: mediante metodo iterativo
const quotient = (dividend, divisor) => {

    if (divisor == 0) {
        return "Indeterminado, dividiendo por 0"
    } else {

        let iteration = 0;
    
        let toChangeSign = signValue(dividend, divisor)
    
        let num1 = checkSignChange(dividend);
        let num2 = checkSignChange(divisor);
    
        while (num1 >= num2) {
            num1 = diff(num1, num2)
            
            iteration++
        }
    
        if(toChangeSign) {
            return iteration
        } else {
            return signChange(iteration)
        }

    }

}

//PRUEBAS DE CALCULADORA
console.log('CALCULADORA: \n')
console.log("SUMA: " + sum(3,5))
console.log("RESTA: " + diff(3,5))
console.log("MULTIPLICACION: " + product(3, -6))
console.log("DIVISION: " + quotient(45, 5))
