import { Button, ButtonBaseProps, SxProps, useTheme } from "@mui/material";
import React from "react";

interface StyledButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const StyledButton = ({ children, sx, ...rest }: StyledButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      sx={{ padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`, ...sx }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
