import { Button } from "@mui/material";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
      <h2>Quantity: {contador}</h2>
      <div className="btns">
        <Button variant="outlined" style={{ color: "green" }} onClick={sumar}>
          +
        </Button>
        <Button variant="contained" onClick={() => onAdd(contador)}>
          add to cart
        </Button>
        <Button variant="outlined" style={{ color: "red" }} onClick={restar}>
          -
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
