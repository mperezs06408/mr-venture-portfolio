"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";

import { Tags } from "@/components/atoms";

export interface Props {
  title: string;
  tags: string[];
}

export const CardWithTags: FC<Props> = ({ title, tags = [] }) => {
  const { spacing } = useTheme();
  return (
    <Box
      bgcolor={"primary.light"}
      width={"100%"}
      maxWidth={spacing(52.25)}
      minHeight={spacing(42.5)}
      position={"relative"}
      borderRadius={5}
      overflow={"hidden"}
    >
      <Box
        position={"absolute"}
        left={0}
        right={0}
        bottom={0}
        bgcolor={"primary.main"}
        height={spacing(12.5)}
        pt={1.5}
        paddingInline={2}
      >
        <Typography variant="h3">{title}</Typography>
        <Box display={"flex"} gap={1.5} mt={1}>
          {tags.map((tag) => (
            <Tags key={tag} description={tag} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
