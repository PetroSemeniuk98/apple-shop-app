import { Col, Row } from "react-bootstrap";
import dataItems from "../data/data.json";
import { StoreItems } from "../components/StoreItems";
import { FC } from "react";





const Store: FC = () => {
  return (
    <>
    
      <h1> Store</h1>
      <Row xs={1} md={2} lg={4} className="g-3">
        {dataItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export { Store };
