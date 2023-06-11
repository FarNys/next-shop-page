import { useState, useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { useGlobalContext } from "../Context/context";
import CartItem from "./CartItem";
import { updateCartAndStorage } from "@/utils/helper";

const routes = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const theme = useTheme();
  const { cart, setCart } = useGlobalContext();
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  useEffect(() => {
    const getCartItem = localStorage.getItem("cart");
    if (!getCartItem) return;
    setCart(JSON.parse(getCartItem));
  }, [setCart]);

  const cartBadgeContent = () => {
    const res =
      cart.length === 0
        ? 0
        : cart.reduce((acc, curr) => {
            return +acc + curr.count;
          }, 0);
    if (res > 9) return "+9";
    return res;
  };

  const calculateTotalPrice = () => {
    const res = cart.reduce((acc, curr) => {
      const price = curr.product.sale_price ?? curr.product.price;
      return +acc + +curr.count * +price;
    }, 0);
    return res.toPrecision(3);
  };

  const cartItemsHandler = () => {
    setisDrawerOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: theme.spacing(6),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        zIndex: 9999,
      }}
    >
      <List sx={{ display: "flex" }}>
        {routes.map((route, index) => (
          <Link
            // style={{ height: "100%", width: "auto" }}
            key={`route-${index}`}
            href={route.link}
          >
            <List
              key={`route-${index}`}
              sx={{
                border: "1px solid transparent",
                mx: theme.spacing(0.5),
                padding: `${theme.spacing(0.25)} ${theme.spacing(2)}`,
                borderRadius: theme.spacing(0.5),
                color: theme.palette.text.secondary,
                "&: hover": {
                  color: theme.palette.primary.main,
                  border: `1px solid ${theme.palette.primary.main}`,
                },
              }}
            >
              <Typography variant="subtitle2">{route.title}</Typography>
            </List>
          </Link>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          mr: theme.spacing(1),
          alignItems: "center",
        }}
      >
        <Button onClick={cartItemsHandler}>
          <Badge badgeContent={cartBadgeContent()} color="primary">
            <BsCart
              color={theme.palette.primary.main}
              fontSize={theme.spacing(3)}
            />
          </Badge>
        </Button>
        <Button sx={{ ml: theme.spacing(1) }} variant="contained">
          Sign In
        </Button>
      </Box>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box
          sx={{
            padding: theme.spacing(1),
            width: "320px",
            maxWidth: "100%",
          }}
        >
          <Box sx={{ position: "relative", height: theme.spacing(4) }}></Box>
          {cart.map((item, index) => (
            <CartItem key={`cart-item-${index}`} item={item} />
          ))}
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box
          sx={{
            padding: theme.spacing(2),
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Total Price </Typography>
          <Typography variant="h6" color="primary">
            ${calculateTotalPrice()}
          </Typography>
        </Box>
        <Box sx={{ my: theme.spacing(2), mx: "auto", width: "90%" }}>
          <Button sx={{ width: "100%" }} variant="contained">
            Purchase
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
