import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className={"containerItemDetail"}>
      <div className={"containerImage"}>
        <img src={productSelected.img} alt="" />
      </div>

      <div className={"containerDetail"}>
        <h2 style={{ fontFamily: "Courier New" }}>
          <span style={{ fontSize: "23px" }}>Name:</span>{" "}
          {productSelected.title}
        </h2>
        <h2 style={{ fontFamily: "Courier New" }}>
          <span style={{ fontSize: "23px" }}>Description:</span>{" "}
          {productSelected.description}
        </h2>
        <h2 style={{ fontFamily: "Courier New" }}>
          <span style={{ fontSize: "23px" }}>Price:</span> $
          {productSelected.price}.-
        </h2>

        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
