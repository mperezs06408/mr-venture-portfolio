/* eslint-disable @next/next/no-img-element */
"use client";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

import { ArrayMethods } from "@/utils/";

interface ClientData {
  src: string;
}

interface Props {
  title: string;
  clientsData: ClientData[];
}

export const ClientsSection: FC<Props> = ({ title, clientsData }) => {
  const { chunkArray, multiplyArray } = ArrayMethods;

  const arrayChunked = chunkArray(clientsData, 5);
  const showedArray = multiplyArray(arrayChunked, 3);

  return (
    <Container maxWidth={"lg"} sx={{ position: "relative" }}>
      <Box
        position={"absolute"}
        sx={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7174467198988971) 55%, rgba(0,0,0,0.9247296330641632) 77%, rgba(0,0,0,1) 92%)",
        }}
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex={1}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        gap={10}
        pt={10}
        pb={10}
      >
        <Typography variant="h2" width={"fit-content"} margin={"auto"}>
          {title}{" "}
          <SouthEastIcon
            sx={{
              display: "block",
              fill: "#ff66b2",
              marginTop: 3,
            }}
          />
        </Typography>
      </Box>
      {showedArray.map((array, i) => {
        return (
          <Box
            key={i + "img"}
            display={"flex"}
            justifyContent="center"
            columnGap={2.5}
            marginBottom={5}
          >
            {array.map((item) => (
              <img key={item.src} src={item.src} height={45} alt="" />
            ))}
          </Box>
        );
      })}
    </Container>
  );
};
