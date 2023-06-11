import { useLayout } from "@/hooks/useLayout";
import {
  Box,
  List,
  ListItem,
  MenuItem,
  MenuList,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import IconCreator from "../icons/category/IconCreator";
import Link from "next/link";
import StyledContainer from "../shared/StyledContainer";

const CategoryMenu = () => {
  const [selectedTab, setselectedTab] = useState<number | null>(null);
  const theme = useTheme();
  const { data } = useLayout();
  const categories = useMemo(() => {
    if (!data) return;
    return data.data.filter(
      (el: any) => el.children.length > 0 && el.type.id === 1
    );
  }, [data]);

  const mouseOverItemHandler = (index: number) => {
    setselectedTab(index);
  };

  const mouseLeaveItemHandler = () => {
    setselectedTab(null);
  };

  return (
    <StyledContainer>
      <Box
        sx={{
          // padding: `0 ${theme.spacing(1)}`,
          display: "flex",
          justifyContent: "center",
        }}
        component="nav"
      >
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            margin: "0",
          }}
          component="ul"
        >
          {categories && categories.length > 0 ? (
            categories.map((el, index) => {
              return (
                <ListItem
                  key={`li-${index}`}
                  sx={{
                    display: "flex",
                    mx: theme.spacing(0.5),
                    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
                    border: "1px solid red",
                    borderRadius: theme.spacing(1),
                    position: "relative",
                    alignItems: "center",
                    minWidth: "max-content",
                    zIndex: 100,
                  }}
                  onMouseOver={() => mouseOverItemHandler(index)}
                  onMouseLeave={mouseLeaveItemHandler}
                >
                  <IconCreator iconName={el.icon} />
                  <Typography
                    component="p"
                    variant="subtitle2"
                    sx={{ ml: theme.spacing(0.5) }}
                  >
                    {el.name}
                  </Typography>
                  {el.children.length > 0 && (
                    <List
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        display: selectedTab === index ? "block" : "none",
                        border: "1px solid blue",
                        borderRadius: theme.spacing(1),
                        //   padding: theme.spacing(1),
                        width: "100%",
                        minWidth: "max-content",
                        padding: theme.spacing(0.5),
                        backgroundColor: theme.palette.background.paper,
                      }}
                    >
                      {el.children.map((child, id) => (
                        <MenuItem
                          key={`menu-${id}-${index}`}
                          sx={{
                            fontSize: theme.spacing(2),
                            borderRadius: theme.spacing(0.5),
                          }}
                        >
                          <Link
                            href={child.slug}
                            style={{
                              width: "100%",
                              color: theme.palette.secondary.main,
                            }}
                          >
                            <Typography variant="subtitle2" component="p">
                              {child.name}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </List>
                  )}
                </ListItem>
              );
            })
          ) : (
            <></>
          )}
        </List>
        {/* <Box sx={{ display: "flex", alignItems: "center" }}>Sign In</Box> */}
      </Box>
    </StyledContainer>
  );
};

export default CategoryMenu;
