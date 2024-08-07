import { Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  description: string;
}

export const Tags: FC<Props> = ({ description }) => {
  return (
    <Typography
      component={"span"}
      variant="body2"
      bgcolor={"primary.light"}
      paddingInline={1}
    >
      {description}
    </Typography>
  );
};
