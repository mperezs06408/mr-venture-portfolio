"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Link, Typography } from "@mui/material";
import { FC, useState } from "react";

export interface Props {
  titleDropdown: string;
  tel: string;
  mail: string;
  socialMedia: { label: string; value: string; strong?: boolean }[];
}

export const FooterDropdown: FC<Props> = ({
  titleDropdown,
  tel,
  mail,
  socialMedia = [],
}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(true);

  const onClickDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };
  return (
    <Box>
      <Box>
        <Box
          component="button"
          bgcolor={"transparent"}
          display={"flex"}
          flexDirection={"column"}
          mb={2}
          onClick={onClickDropdown}
        >
          <Typography
            variant="body1"
            color={"common.black"}
            fontWeight={"bold"}
          >
            {titleDropdown}
          </Typography>
          {dropdownIsOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </Box>
      </Box>
      {dropdownIsOpen && (
        <Box>
          <Typography>
            <Link href={"tel:" + tel}>{tel}</Link>
          </Typography>
          <Typography>
            <Link href={"mailto:" + mail}>{mail}</Link>
          </Typography>
          {socialMedia.map((media, i) => (
            <Typography
              key={media.value}
              mt={i === 0 ? 4 : undefined}
              fontWeight={media?.strong ? "bold" : "regular"}
            >
              <Link href={media.value}>{media.label}</Link>
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};
