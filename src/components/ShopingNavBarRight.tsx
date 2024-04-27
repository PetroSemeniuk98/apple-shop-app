import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShopingContex } from "../context/ShopingCartContex";
import { FC } from "react";
import { CartItem } from "./CartItem";
import StoreItems from "../data/data.json";
import { formatCurrency } from "../utilities/utl";

interface IProps {
  isOpen: boolean;
}

const ShopingNavBarRight: FC<IProps> = ({ isOpen }) => {
  const { closeCart, cartItem } = useShopingContex();
  return (
    <Offcanvas
      onHide={closeCart}
      show={isOpen}
      placement="end"
      backdrop="static"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>BASKET:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className=" fw-bold fs-5 d-flex  align-items-center justify-content-between">
            <span>TOTAL:</span>
            <span>
              {formatCurrency(
                cartItem.reduce((total, cartItem) => {
                  const item = StoreItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </span>
          </div>
          <hr />
          <Button variant="dark">Buy</Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShopingNavBarRight;
