function totalize(price, quantity, state_tax = 0) {
  return price * (state_tax+1) * quantity;
}

export default totalize;
