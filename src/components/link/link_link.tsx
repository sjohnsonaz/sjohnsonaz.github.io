"use client";

import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { LinkProps, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export const LinkLink: FC<
  {
    href: string;
    children?: ReactNode | ReactNode;
    target?: HTMLAttributeAnchorTarget;
  } & LinkProps
> = ({ href, children, target, ...props }) => (
  <MuiLink
    {...props}
    color="info"
    href={href}
    sx={{ textDecoration: "none" }}
    component={Link}
    target={target || isExternal(href) ? "_blank" : undefined}
  >
    {children}
  </MuiLink>
);

const isExternal = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");
