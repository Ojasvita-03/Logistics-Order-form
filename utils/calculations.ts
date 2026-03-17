import { Package } from "../types";

export const calculateTotals = (packages: Package[]) => {
  return packages.reduce(
    (acc, pkg) => {
      acc.totalWeight += pkg.weight;
      acc.totalValue += pkg.value;
      return acc;
    },
    { totalWeight: 0, totalValue: 0 }
  );
};