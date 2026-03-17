"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import OrderForm from "../components/OrderForm/OrderForm";
import Preview from "../components/Preview/Preview";

export default function Home() {
  const [order, setOrder] = useState({
    orderId: "ORD-123456",
    shipmentDate: "",
    deliveryType: "Standard",
    consignor: { name: "", address: "", city: "", pincode: "" },
    consignee: { name: "", address: "", city: "", pincode: "" },
    packages: [
      {
        id: "1",
        name: "",
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        value: 0,
      },
    ],
    fragile: false,
    insurance: false,
  });

  return (
    <div className={styles.container}>
      <OrderForm order={order} setOrder={setOrder} />
      {/* <Preview order={order} /> */}
    </div>
  );
}