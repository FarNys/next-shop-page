import { Container, ContainerProps, SxProps, useTheme } from "@mui/material";
import React from "react";

interface StyleContainerrType extends ContainerProps {
  children: React.ReactElement[] | React.ReactElement;
  sx?: SxProps;
}

const StyledContainer = ({ children, sx, ...rest }: StyleContainerrType) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",

        mt: theme.spacing(1),
        borderRadius: theme.spacing(1),
        // overflow: "hidden",
        width: "95%",
        backgroundColor: theme.palette.background.paper,
        ...sx,
      }}
      disableGutters
      {...rest}
    >
      {children}
    </Container>
  );
};

export default StyledContainer;
