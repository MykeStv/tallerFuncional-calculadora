//Maycol Steven Rincon Bayona
//Taller de programación funcional

const sum = (num1, num2) => {
    return num1 + num2
}

const diff = (num1, num2) => {
    return num1 - num2
}

const signValue = (val1, val2) => {
    if((val1 > 0 && val2 < 0) || (val1 < 0 && val2 > 0)) {
        return false
    } else {
        return true
    }
}

const signChange = (val) => {
    return diff(0, val)
}


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

// console.log(suma(3,5))
// console.log(diff(3,5))
console.log(product(3, -6))
