type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

function calculateSubtotal(carts: CartLine[]): CartLineWithSubtotal[] {
  return carts.map((cart) => {
    const total = cart.quantity * cart.price
    return {
      product: cart.product,
      price: cart.price,
      quantity: cart.quantity,
      subtotal: total
    }
  })
}

export { calculateSubtotal }
