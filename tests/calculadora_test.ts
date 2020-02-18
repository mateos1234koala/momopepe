import { Calculadora } from "../calculadora"

describe("calculadora", () => {
    it("suma correcta", () => {
        let resEsperado = 5
        let calc = new Calculadora()
        let resObtenido = calc.sumar(3, 2)

        expect(resEsperado).toEqual(resObtenido)
    })
})