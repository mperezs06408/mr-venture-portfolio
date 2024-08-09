import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";

import {
  FooterDropdown,
  Props as FooterDropdownProps,
} from "./FooterDropdown/FooterDropdown";

export interface Props {
  description: { highlightedText?: string; description: string }[];
  dropdown: FooterDropdownProps;
  copyright: string;
}

export const Footer: FC<Props> = ({
  description = [],
  dropdown,
  copyright,
}) => {
  return (
    <Box component={"footer"} bgcolor={"common.white"} mt={10} pt={10}>
      <Container maxWidth={"md"}>
        <Grid spacing={4} container>
          <Grid item md={8} display={"flex"} flexDirection={"column"} gap={3}>
            {description.map((paragraph, i) => (
              <Typography
                key={"paragraph-" + i}
                variant="body1"
                color={"common.black"}
              >
                {!!paragraph?.highlightedText && (
                  <>
                    <Box component={"strong"} fontStyle={"italic"}>
                      {paragraph.highlightedText}
                    </Box>{" "}
                  </>
                )}
                {paragraph.description}
              </Typography>
            ))}
          </Grid>
          <Grid item md={4}>
            <FooterDropdown {...dropdown} />
          </Grid>
        </Grid>
        <Typography
          color={"transparent"}
          sx={{
            background: "linear-gradient(to right, #d633ff, #ff66b2)",
            WebkitBackgroundClip: "text",
          }}
          textAlign={"right"}
          pt={4}
          pb={2}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
};
