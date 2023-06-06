import React, { ComponentPropsWithoutRef } from "react";
import * as CategoryIcon from "./index";
import { SvgIcon } from "@mui/material";
interface IconCreatorType extends ComponentPropsWithoutRef<"svg"> {
  iconName: string;
}

const IconCreator = ({ iconName, ...rest }: IconCreatorType) => {
  const Icon: SVGElement = CategoryIcon[iconName as keyof {}];
  if (!Icon) return <></>;
  return <SvgIcon component={Icon} inheritViewBox {...rest} />;
};

export default IconCreator;
