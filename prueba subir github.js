class Calculadora {
    static validarNumero(n) {
        if (typeof n !== "number" || isNaN(n)) {
            throw new TypeError("El valor debe ser un número válido.");
        }
    }

    static sumar(a, b) {
        this.validarNumero(a);
        this.validarNumero(b);
        return a + b;
    }

    static restar(a, b) {
        this.validarNumero(a);
        this.validarNumero(b);
        return a - b;
    }

    static multiplicar(a, b) {
        this.validarNumero(a);
        this.validarNumero(b);
        return a * b;
    }

    static dividir(a, b) {
        this.validarNumero(a);
        this.validarNumero(b);
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }

    static potencia(a, b) {
        this.validarNumero(a);
        this.validarNumero(b);
        return Math.pow(a, b);
    }

    static raizCuadrada(a) {
        this.validarNumero(a);
        if (a < 0) {
            throw new Error("No se puede calcular la raíz cuadrada de un número negativo.");
        }
        return Math.sqrt(a);
    }

    static logaritmo(a, base = Math.E) {
        this.validarNumero(a);
        this.validarNumero(base);
        if (a <= 0 || base <= 0 || base === 1) {
            throw new Error("Valores inválidos para el logaritmo.");
        }
        return Math.log(a) / Math.log(base);
    }

    static valorAbsoluto(a) {
        this.validarNumero(a);
        return Math.abs(a);
    }

    static redondear(a, decimales = 0) {
        this.validarNumero(a);
        this.validarNumero(decimales);
        if (decimales < 0 || !Number.isInteger(decimales)) {
            throw new Error("Los decimales deben ser un número entero positivo.");
        }
        const factor = Math.pow(10, decimales);
        return Math.round(a * factor) / factor;
    }
}

// Ejemplo de uso profesional y seguro:
try {
    console.log("Suma: 5 + 3 =", Calculadora.sumar(5, 3));
    console.log("Resta: 10 - 4 =", Calculadora.restar(10, 4));
    console.log("Multiplicación: 6 * 7 =", Calculadora.multiplicar(6, 7));
    console.log("División: 20 / 5 =", Calculadora.dividir(20, 5));
    console.log("Potencia: 2 ^ 3 =", Calculadora.potencia(2, 3));
    console.log("Raíz cuadrada: √16 =", Calculadora.raizCuadrada(16));
    console.log("Logaritmo base 10 de 100 =", Calculadora.logaritmo(100, 10));
    console.log("Valor absoluto de -15 =", Calculadora.valorAbsoluto(-15));
    console.log("Redondear 3.14159 a 2 decimales =", Calculadora.redondear(3.14159, 2));
} catch (error) {
    console.error("Error:", error.message);
}