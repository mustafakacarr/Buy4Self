import React, { createContext, useContext, useState } from "react";

const CartDropdownContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);    
  };
  const showCart = () => {
    setIsCartOpen(true);
  };

  return (
    <CartDropdownContext.Provider value={{ isCartOpen, toggleCart, showCart }}>
      {children}
    </CartDropdownContext.Provider>
  );
}

export function useCart() {
  return useContext(CartDropdownContext);
}
