"use client";

import { FC } from "react";
import { Box } from "@mui/material";

import { LinkLink } from "@/components";

export const LinkItem: FC<{ href: string; title: string }> = ({
  href,
  title,
}) => (
  <Box component="li" padding={0} margin={0} sx={{ listStyleType: "none" }}>
    <LinkLink href={href}>{title}</LinkLink>
  </Box>
);
