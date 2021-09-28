function totalize(price, quantity, state_tax = 0) {
  return price * (state_tax+1) * quantity;
}

function tax_by_state(state_abb) {
  let state_taxes = {'NY':0.1,'TX':0.2}
  return state_taxes[state_abb]
}

module.exports = {totalize,tax_by_state}
