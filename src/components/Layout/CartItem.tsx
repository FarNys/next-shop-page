import { CartType, ProductsType } from "@/types";
import {
  Alert,
  Box,
  Button,
  Grow,
  GrowProps,
  IconButton,
  Slide,
  SlideProps,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useGlobalContext } from "../Context/context";
import { updateCartAndStorage } from "@/utils/helper";
import { useLocalStorage } from "@/hooks";

interface CartItemProps {
  item: CartType;
}

function GrowTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const CartItem = ({ item }: CartItemProps) => {
  const theme = useTheme();
  const [snackState, setsnackState] = useState<{
    state: boolean;
    type: "success" | "error" | "warning" | "info";
    message: string;
  }>({
    state: false,
    type: "success",
    message: "",
  });

  const { setCart, cart } = useGlobalContext();
  const [storeKey, setStoreKey] = useLocalStorage("cart", []);

  const price = item.product.sale_price ?? item.product.price;

  const removeItem = useCallback(() => {
    const newItem = [
      ...cart.filter((prod) => prod.product.id !== item.product.id),
    ];
    updateCartAndStorage(newItem, setCart, setStoreKey);
    return setCart(newItem);
  }, [item.product.id, setCart, cart, setStoreKey]);

  const removeItemFromCartHandler = () => {
    removeItem();
    setsnackState({
      state: true,
      message: "has deleted from cart",
      type: "warning",
    });
    // updateCartAndStorage([...cart], setCart, setStoreKey);
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
    setsnackState({
      state: true,
      message: "successfully increased +1",
      type: "success",
    });
    // }
  };

  const decreaseItemCartHandler = () => {
    let newItem;
    const findIndex = cart.findIndex(
      (prod) => prod.product.id === item.product.id
    );
    if (cart[findIndex].count == 1) {
      removeItem();
      setsnackState({
        state: true,
        message: "has deleted from the the cart",
        type: "warning",
      });
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
      setsnackState({
        state: true,
        message: "successfully decreased -1",
        type: "success",
      });
    }
  };

  const closeSnackHandler = (
    e: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    setsnackState({
      ...snackState,
      state: false,
    });
  };

  const handleExit = () => {
    setsnackState({
      ...snackState,
      message: "",
    });
  };

  return (
    <React.Fragment>
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
          <Typography color={theme.palette.text.secondary} variant="body2">
            {item.product.name}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color={theme.palette.text.secondary}>
              ${price}
            </Typography>
            <Typography>${(price * item.count).toPrecision(3)}</Typography>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={snackState.state}
        onClose={closeSnackHandler}
        autoHideDuration={1500}
        TransitionComponent={GrowTransition}
        key={snackState.message}
        TransitionProps={{ onExit: handleExit }}
      >
        <Alert
          onClose={closeSnackHandler}
          severity={snackState.type}
          sx={{ width: "100%" }}
        >
          <Box sx={{ display: "flex" }}>
            {" "}
            <Typography>{item.product.name}&nbsp;</Typography>
            <Typography
              color={
                snackState.type === "success"
                  ? theme.palette.success.main
                  : theme.palette.warning.main
              }
            >
              {snackState.message}
            </Typography>
          </Box>
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default CartItem;
