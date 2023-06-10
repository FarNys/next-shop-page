import {
  Box,
  List,
  ListItem,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

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
  return (
    <Box
      sx={{
        height: theme.spacing(6),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
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
      <Box>Sign In</Box>
      <Box>Cart</Box>
    </Box>
  );
};

export default Header;
