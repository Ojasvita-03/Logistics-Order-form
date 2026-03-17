import styles from "./PackageList.module.css";
import { Order } from "../../types";


export default function PackageList({
  order,
  setOrder,
}: {
  order: Order;
  setOrder: any;
}) {
  const updatePackage = (id: string, field: string, value: any) => {
    const updated = order.packages.map((pkg) =>
      pkg.id === id ? { ...pkg, [field]: value } : pkg
    );
    setOrder({ ...order, packages: updated });
  };

  const addPackage = () => {
    setOrder({
      ...order,
      packages: [
        ...order.packages,
        {
          id: Date.now().toString(),
          name: "",
          weight: 0,
          length: 0,
          width: 0,
          height: 0,
          value: 0,
        },
      ],
    });
  };

  const removePackage = (id: string) => {
    if (order.packages.length === 1) return;
    setOrder({
      ...order,
      packages: order.packages.filter((pkg) => pkg.id !== id),
    });
  };

  return (
    <div>
      {order.packages.map((pkg) => (
        <div key={pkg.id} className={styles.card}>
          <input
            placeholder="Name"
            value={pkg.name}
            onChange={(e) =>
              updatePackage(pkg.id, "name", e.target.value)
            }
          />
          <input
            type="number"
            placeholder="Weight"
            onChange={(e) =>
              updatePackage(pkg.id, "weight", +e.target.value)
            }
          />
          <button onClick={() => removePackage(pkg.id)}>Remove</button>
        </div>
      ))}

      <button onClick={addPackage}>Add Package</button>
    </div>
  );
}