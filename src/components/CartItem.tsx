import { FC } from "react";
import { Button, Stack } from "react-bootstrap";
import StoreItems from "../data/data.json";
import { formatCurrency } from "../utilities/utl";
import { useShopingContex } from "../context/ShopingCartContex";

interface IProps {
  id: number;
  quantity: number;
}

const CartItem: FC<IProps> = ({ id, quantity }) => {
  const { removeItem } = useShopingContex();

  const item = StoreItems.find((i) => i.id === id);
  if (item?.id == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="foto"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.model} {item.sizeScreen} {item.series}{" "}
          <span className="text-muted" style={{ fontSize: "12px" }}>
            x{quantity}
          </span>
          <div>
            <span className="text-muted" style={{ fontSize: "15px" }}>
              {formatCurrency(item.price)}
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="text-muted">
          {formatCurrency(item.price * quantity)}
        </span>
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      </Button>
    </Stack>
  );
};

export { CartItem };
