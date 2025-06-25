def mostrar_menu():
    print("\nCalculadora Básica")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Salir")

def pedir_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Por favor, ingresa un número válido.")

def main():
    while True:
        mostrar_menu()
        opcion = input("Elige una opción (1-5): ")
        if opcion == "5":
            print("¡Hasta luego!")
            break

        if opcion in ("1", "2", "3", "4"):
            a = pedir_numero("Ingresa el primer número: ")
            b = pedir_numero("Ingresa el segundo número: ")

            if opcion == "1":
                resultado = a + b
                operacion = "Suma"
            elif opcion == "2":
                resultado = a - b
                operacion = "Resta"
            elif opcion == "3":
                resultado = a * b
                operacion = "Multiplicación"
            elif opcion == "4":
                if b == 0:
                    print("No se puede dividir por cero.")
                    continue
                resultado = a / b
                operacion = "División"

            print(f"{operacion}: {a} y {b} = {resultado}")
        else:
            print("Opción no válida. Intenta de nuevo.")

if __name__ == "__main__":
    main()

    #este es el fin del codigo