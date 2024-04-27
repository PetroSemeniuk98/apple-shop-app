import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useShopingContex } from "../context/ShopingCartContex";

const NavBar = () => {
  const { cartQuantity, openCart } = useShopingContex();

  return (
    <NavbarBs sticky="top" className="shadow-sm bg-white mb-5">
      <Container>
        <Nav style={{ color: "white" }} className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <>
            <Button
              variant="outline-dark"
              className="rounded-circle"
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              onClick={openCart}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="29"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <div
                className="d-flex align-items-center justify-content-center bg-danger rounded-circle"
                style={{
                  color: "white",
                  width: "1.3rem",
                  height: "1.3rem",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  transform: "translate(10%,10%)",
                  fontSize: "12px",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          </>
        )}
      </Container>
    </NavbarBs>
  );
};

export default NavBar;
