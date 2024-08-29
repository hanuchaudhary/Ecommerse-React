import { createContext, useState } from "react";
import AllProducts from "../components/AllProducts";
export const shopContext = createContext(null);

const defaultCart = () => {
  let cart = {};
  for (let i = 0; i < AllProducts.length; i++) {
    cart[AllProducts[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(defaultCart());

  const addToCart = (productId) => {
    setCartItem((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const removeFromCart = (productId) => {
    setCartItem((prev) => {
      return { ...prev, [productId]: 0 };
    });
  };

  const minusFromCart = (productId) => {
    setCartItem((prev) => {
      const updatedCount = prev[productId] > 0 ? prev[productId] - 1 : 0;
      return { ...prev, [productId]: updatedCount };
    });
  };

  const cartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = AllProducts.find(
          (product) => product.id === parseInt(item)
        );
        totalAmount += itemInfo.price * cartItem[item]
      }
    }
    return totalAmount;
  };

  const getTotalCartCount = () =>{
    let count = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        count += cartItem[item];
      }
    }
    return count;
  }

  const contextValue = {
    AllProducts,
    cartAmount,
    cartItem,
    addToCart,
    minusFromCart,
    removeFromCart,
    getTotalCartCount,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
