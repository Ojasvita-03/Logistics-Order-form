export const generateOrderId = () => {
  return "ORD-" + Date.now().toString().slice(-6);
};