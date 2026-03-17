// import styles from "./OrderForm.module.css";
// import { Order } from "../../types";
// import PackageList from "../PackageList/PackageList";

// export default function OrderForm({
//   order,
//   setOrder,
// }: {
//   order: Order;
//   setOrder: any;
// }) {
//   const updateField = (field: keyof Order, value: any) => {
//     setOrder({ ...order, [field]: value });
//   };

//   return (
//     <div className={styles.form}>
//       <h2>Create Order</h2>

//       <input value={order.orderId} readOnly />

//       <input
//         type="date"
//         value={order.shipmentDate}
//         onChange={(e) => updateField("shipmentDate", e.target.value)}
//       />

//       <select
//         value={order.deliveryType}
//         onChange={(e) =>
//           updateField("deliveryType", e.target.value as Order["deliveryType"])
//         }
//       >
//         <option value="Standard">Standard</option>
//         <option value="Express">Express</option>
//       </select>

//       <PackageList order={order} setOrder={setOrder} />

//       <label>
//         <input
//           type="checkbox"
//           checked={order.fragile}
//           onChange={(e) => updateField("fragile", e.target.checked)}
//         />
//         Fragile
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           checked={order.insurance}
//           onChange={(e) => updateField("insurance", e.target.checked)}
//         />
//         Insurance
//       </label>
//     </div>
//   );
// }
"use client";

const OrderForm = (props: any) => {
  const { order, setOrder } = props;

  return <div>Order Form</div>;
};

export default OrderForm;