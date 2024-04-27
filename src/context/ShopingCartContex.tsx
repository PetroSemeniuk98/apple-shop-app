import { useContext, createContext, ReactNode, FC, useState } from "react";
import ShopingNavBarRight from "../components/ShopingNavBarRight";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IProvider {
  children: ReactNode;
}

interface IShopContex {
  openCart: () => void;
  closeCart: () => void;
  getAllItems: (id: number) => number;
  incQuantity: (id: number) => void;
  decQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartQuantity: number;
  cartItem: ICartItem[];
}
interface ICartItem {
  id: number;
  quantity: number;
}
const ShopingCartContex = createContext({} as IShopContex);

const useShopingContex = () => {
  return useContext(ShopingCartContex);
};

const ShopingCartProvider: FC<IProvider> = ({ children }) => {
  const [cartItem, setCartItem] = useLocalStorage<ICartItem[]>(
    "shoping-apple",
    []
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getAllItems = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const incQuantity = (id: number) => {
    setCartItem((current) => {
      if (current.find((item) => item.id === id) == null) {
        return [...current, { id, quantity: 1 }];
      } else {
        return current.map((curItem) => {
          if (curItem.id === id) {
            return { ...curItem, quantity: curItem.quantity + 1 };
          } else {
            return curItem;
          }
        });
      }
    });
  };
  const decQuantity = (id: number) => {
    setCartItem((current) => {
      if (current.find((item) => item.id === id)?.quantity === 1) {
        return current.filter((item) => item.id !== id);
      } else {
        return current.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItem((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  };

  return (
    <ShopingCartContex.Provider
      value={{
        getAllItems,
        incQuantity,
        decQuantity,
        removeItem,
        cartQuantity,
        openCart,
        closeCart,
        cartItem,
      }}
    >
      {children}

      <ShopingNavBarRight isOpen={isOpen} />
    </ShopingCartContex.Provider>
  );
};

export { ShopingCartProvider, useShopingContex };
