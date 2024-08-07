"use client";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FC } from "react";

import { CardWithTags } from "@/components/molecules";

interface Props {
  sectionTitle: string;
  cards: { title: string; tags: string[] }[];
  withStyledTitle?: boolean;
}

export const CardsSections: FC<Props> = ({
  sectionTitle,
  cards = [],
  withStyledTitle = false,
}) => {
  const { spacing } = useTheme();
  return (
    <Box display={"flex"} flexDirection={"column"} gap={10} pt={10}>
      <Typography
        variant="h2"
        sx={{
          textShadow: withStyledTitle
            ? `${spacing(0.5)} 0 ${spacing(0.375)} #FFFFFFFF,${spacing(
                -0.75
              )} 0 ${spacing(0.375)} #FFFFFF99`
            : undefined,
        }}
      >
        {sectionTitle}
      </Typography>
      <Grid container justifyContent={"center"} spacing={2}>
        {cards.map((card) => (
          <Grid key={card.title} item xs={12} md={6}>
            <CardWithTags {...card} />
          </Grid>
        ))}
        {cards.length % 2 !== 0 && <Grid item xs={12} md={6}></Grid>}
      </Grid>
    </Box>
  );
};
