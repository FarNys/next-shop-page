import { CartType } from "@/types";

export const updateCartAndStorage = (
  item: CartType[],
  setCart: any,
  setStorage: any
) => {
  setCart(item);
  setStorage(item);
};
