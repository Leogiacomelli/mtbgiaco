import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  if (orderId) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Thank you for visiting us. Happy ridding !!</h2>
        <h4>Recipt number : {orderId}</h4>
        <Link to="/">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt="" />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <h2>${item.price}.-</h2>
                    <h2>Unidades: {item.quantity}</h2>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                    >
                      Elimiar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-info">
            <h3>Total price: {getTotalPrice()}</h3>
            <h3>Cupon Code Discount: - </h3>
            <h3>Total amount due: -</h3>

            {cart.length > 0 && (
              <div className="btn-cart">
                <Button variant="contained" onClick={() => setShowForm(true)}>
                  Finish Shopping
                </Button>
                <Button onClick={clear} variant="contained">
                  Empty Cart
                </Button>
              </div>
            )}

            <h1>Total amount due is ${getTotalPrice()}</h1>
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
