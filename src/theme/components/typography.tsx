import { ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface Props {
  defaultProps?: ComponentsProps["MuiTypography"];
  variants?: ComponentsVariants<Theme>["MuiTypography"];
}

export const MuiTypography: Props = {
  defaultProps: {
    color: "common.white",
    sx: { textWrap: "pretty" },
  },
  variants: [
    {
      props: { variant: "h2" },
      style: ({ theme }) => ({
        fontSize: theme.spacing(3.375),
        letterSpacing: theme.spacing(3),
        fontWeight: "regular",
        textAlign: "center",
      }),
    },
    {
      props: { variant: "h3" },
      style: ({ theme }) => ({
        fontSize: theme.spacing(3.375),
        fontWeight: "regular",
      }),
    },
    {
      props: { variant: "body2" },
      style: ({ theme }) => ({
        fontSize: theme.spacing(1.75),
        fontWeight: "regular",
      }),
    },
  ],
};
