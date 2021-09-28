import totalize from "./App.js";

describe("Prueba calcular total: cantidad, precio", () => {
  it("Debe multiplicar cantidad y precio.", () => {
    let quantity = 10
    let price = 5
    expect(totalize(price,quantity)).toEqual(50);
   })
});

describe("Prueba calcular total: cantidad, precio, estado", () => {
  it("Debe multiplicar cantidad y precio (incluido los impuestos segun el estado).", () => {
    let quantity = 10
    let price = 5
    let state_tax = 0.10
    expect(totalize(price,quantity,state_tax)).toEqual(55);
  })
});