import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/utl";
import "../components/style.css";
import { useShopingContex } from "../context/ShopingCartContex";


interface IProps {
  id: number;
  model: string;
  core: string;
  color: string;
  price: number;
  imgUrl: string;
  memory: string;
  sizeScreen: string;
  series: string;
}

const StoreItems: FC<IProps> = ({
  color,
  core,
  id,
  imgUrl,
  memory,
  model,
  price,
  series,
  sizeScreen,
}) => {
  const { getAllItems, decQuantity, incQuantity, removeItem } =
    useShopingContex();

  const quantity = getAllItems(id);

  return (
    <>
      <Card className="h-100  card_item" style={{ padding: "20px" }}>
        <Card.Img
          src={imgUrl}
          height="100%"
          style={{ objectFit: "cover" }}
          variant="top"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex align-items-center justify-content-between">
            <span style={{ fontSize: "15px" }}>
              {model} {sizeScreen} {series}
            </span>
            <span className="ms-2 text-muted" style={{ fontSize: "20px" }}>
              {formatCurrency(price)}
            </span>
          </Card.Title>

          <Card.Title
            className="d-flex align-items-center"
            style={{ fontSize: "15px" }}
          >
            <span>color: </span>
            <button className="rounded-circle btn-all btn_one"></button>
            <button className="rounded-circle  btn-all btn_two "></button>
            <button className="rounded-circle  btn-all btn_three"></button>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={() => incQuantity(id)}>
                + Add to basket
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".3rem" }}
              >
                <div
                  className=" d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    size="sm"
                    onClick={() => decQuantity(id)}
                    style={{ width: "2rem", height: "2rem" }}
                    variant="dark"
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-5">{quantity} </span>
                    in basket
                  </div>
                  <Button
                    size="sm"
                    onClick={() => incQuantity(id)}
                    style={{ width: "2rem", height: "2rem" }}
                    variant="dark"
                  >
                    +
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => removeItem(id)}
                >
                  remove
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
      
    </>
  );
};

export { StoreItems };
