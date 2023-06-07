import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import IconCreator from "../icons/category/IconCreator";

const HomeSearch = () => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);
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
      >
        <TextField
          type="text"
          inputRef={inputRef}
          sx={{
            "& input": {
              px: theme.spacing(3),
              py: theme.spacing(1.5),
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: `${theme.spacing(0.5)} 0 0 ${theme.spacing(0.5)}}`,
            },
          }}
        />
        <Button
          variant="contained"
          startIcon={<BsSearch />}
          sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HomeSearch;
