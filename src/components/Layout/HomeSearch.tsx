import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React, { MouseEventHandler, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import IconCreator from "../icons/category/IconCreator";

const HomeSearch = () => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const searchHandler = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Typography variant="h4" component="h1" textAlign="center">
        Find Your Product
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          mt: 2,
          position: "relative",
        }}
        component="form"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          type="text"
          inputRef={inputRef}
          sx={{
            "& input": {
              px: theme.spacing(2),
              py: theme.spacing(1),
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: `${theme.spacing(0.5)} 0 0 ${theme.spacing(0.5)}}`,
            },
          }}
        />
        <Button
          variant="contained"
          startIcon={<BsSearch />}
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            border: `1px solid ${theme.palette.primary.main}`,
          }}
          onClick={searchHandler}
          type="submit"
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HomeSearch;
