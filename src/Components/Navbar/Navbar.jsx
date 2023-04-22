import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "category");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <img
            style={{ height: 50, borderRadius: 15, marginLeft: 2 }}
            src="https://thumbs.dreamstime.com/b/mtb-logo-mountain-bike-t-shirt-print-design-dark-background-vector-illustration-250609184.jpg"
            alt=""
          />
        </Link>

        <ul className={styles.containerList}>
          {categoryList?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
