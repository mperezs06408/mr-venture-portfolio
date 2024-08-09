import { ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface Props {
  defaultProps?: ComponentsProps["MuiLink"];
  variants?: ComponentsVariants<Theme>["MuiLink"];
}

export const MuiLink: Props = {
  defaultProps: {
    color: "common.black",
    sx: { textWrap: "pretty", textDecoration: "none" },
  },
  variants: [],
};
