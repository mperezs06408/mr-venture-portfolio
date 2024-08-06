"use client";
import { createTheme } from "@mui/material";
import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";

export const baseTheme = createTheme({ palette, typography, components });
