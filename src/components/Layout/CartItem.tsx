import { CartType, ProductsType } from "@/types";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useCallback } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useGlobalContext } from "../Context/context";
import { updateCartAndStorage } from "@/utils/helper";
import { useLocalStorage } from "@/hooks";

interface CartItemProps {
  item: CartType;
}

const CartItem = ({ item }: CartItemProps) => {
  const theme = useTheme();
  const { setCart, cart } = useGlobalContext();
  const [storeKey, setStoreKey] = useLocalStorage("cart", []);

  const price = item.product.sale_price ?? item.product.price;

  const removeItem = useCallback(() => {
    return setCart([
      ...cart.filter((prod) => prod.product.id !== item.product.id),
    ]);
  }, [item.product.id, setCart, cart]);

  const removeItemFromCartHandler = () => {
    removeItem();
  };
  const increaseItemCartHandler = () => {
    let newItem = [
      ...cart.map((prod) =>
        prod.product.id === item.product.id
          ? {
              count: +prod.count + 1,
              product: item.product,
            }
          : { count: prod.count, product: prod.product }
      ),
    ];
    updateCartAndStorage(newItem, setCart, setStoreKey);
  };

  const decreaseItemCartHandler = () => {
    let newItem;
    const findIndex = cart.findIndex(
      (prod) => prod.product.id === item.product.id
    );
    if (cart[findIndex].count == 1) {
      removeItem();
    } else {
      newItem = [
        ...cart.map((prod) =>
          prod.product.id === item.product.id
            ? {
                count: +prod.count - 1,
                product: item.product,
              }
            : { count: prod.count, product: prod.product }
        ),
      ];
      updateCartAndStorage(newItem, setCart, setStoreKey);
    }
  };

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.background.default}`,
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
        mt: theme.spacing(1),
        "&:hover": {
          border: `1px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconButton
            size="small"
            aria-label="increase item"
            color="primary"
            onClick={increaseItemCartHandler}
          >
            <BiUpArrow />
          </IconButton>
          <Typography textAlign="center">{item.count}</Typography>
          <IconButton
            size="small"
            aria-label="decrease item"
            color="primary"
            onClick={decreaseItemCartHandler}
          >
            <BiDownArrow />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
          <Box sx={{ position: "relative", width: "100%", aspectRatio: 2 }}>
            <Image
              src={item.product.image.thumbnail}
              alt={item.product.name}
              fill
              style={{ objectFit: "contain" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <IconButton color="warning" onClick={removeItemFromCartHandler}>
                <AiOutlineCloseCircle />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography>{item.product.name}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>${price}</Typography>
          <Typography>${(price * item.count).toPrecision(3)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
