import * as f from './App.js';

describe("Prueba calcular total: cantidad, precio", () => {
  it("Debe multiplicar cantidad y precio.", () => {
    let quantity = 10
    let price = 5
    expect(f.totalize(price,quantity)).toEqual(50);
   })
});

describe("Prueba calcular total: cantidad, precio, estado", () => {
  it("Debe multiplicar cantidad y precio (incluido los impuestos segun el estado).", () => {
    let quantity = 10
    let price = 5
    let state_tax = 0.10
    expect(f.totalize(price,quantity,state_tax)).toEqual(55);
  })
});

describe("Prueba: impuesto de estado",()=>{
  it("Probar tax_by_state",()=>{
    expect(f.tax_by_state("NY")).toEqual(0.10);
  })
})