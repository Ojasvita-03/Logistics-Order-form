export interface Address {
  name: string;
  address: string;
  city: string;
  pincode: string;
}

export interface Package {
  id: string;
  name: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  value: number;
}

export interface Order {
  orderId: string;
  shipmentDate: string;
  deliveryType: "Standard" | "Express";
  consignor: Address;
  consignee: Address;
  packages: Package[];
  fragile: boolean;
  insurance: boolean;
}