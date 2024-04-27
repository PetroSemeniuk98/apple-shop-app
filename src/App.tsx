import { FC } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { ShopingCartProvider } from "./context/ShopingCartContex";

const App: FC = () => {
  return (
    <ShopingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={"About"} />
        </Routes>
      </Container>
    </ShopingCartProvider>
  );
};

export { App };
