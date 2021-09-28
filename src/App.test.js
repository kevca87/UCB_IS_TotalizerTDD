import totalize from "./App.js";

describe("Prueba calcular total: cantidad, precio", () => {
  it("Debe multiplicar cantidad y precio.", () => {
    expect(totalize(5,10)).toEqual(50);
  })
});