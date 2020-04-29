import React, { memo } from "react";
import { Container } from "./Layout.style";

interface LayoutProp {
  children?: any;
}

const Layout: React.FC<LayoutProp> = (props) => {
  return <Container>{props.children}</Container>;
};

export default memo(Layout);
