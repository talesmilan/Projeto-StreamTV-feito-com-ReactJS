


export const validaCartao = (numero) => {

    const totalDigitos = numero.length
    let soma = 0
    let resultados = []
    let digito = []

    let m = 0
    while (m < totalDigitos) {
        digito.push(Number(numero[m]))
        m ++
    }

    let i = 2
    let j = 0

    while (i <= totalDigitos) {
        resultados.push(digito[totalDigitos - i] * 2)

        if (resultados[j] >= 10) {
            resultados[j] = (resultados[j] % 10) + parseInt(((resultados[j] / 10) % 10))
        }

        soma += resultados[j]
        i += 2
        j ++
    }
    let n = 1
    while (n <= totalDigitos) {
        soma += digito[totalDigitos - n]
        n += 2
    }

    if (totalDigitos > 16 || totalDigitos < 13) {
        return false
    } else if (soma % 10 !== 0) {
        return false
    } else if (totalDigitos === 15 && digito[0] === 3) {
        if (digito[1] === 4 || digito[1] === 7) {
            return true
        } else {
            return false
        }
    } else if (totalDigitos === 16) {
        if (digito[0] === 5) {
            if (digito[1] > 0 && digito[1] < 6) {
                return true
            } else {
                return false
            }
        } else if (digito[0] === 4) {
            return true
        } else {
            return false
        }
    } else if (totalDigitos === 13 && digito[0] === 4) {
        return true
    } else {
        return false
    }


}  
