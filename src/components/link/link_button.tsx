"use client";

import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

export const LinkButton: FC<
  {
    href: string;
  } & ButtonProps
> = ({ href, ...props }) => {
  if (isExternal(href)) {
    return (
      // @ts-expect-error TODO: Fix type issues
      <Button LinkComponent="a" {...props} href={href} target="_blank"></Button>
    );
  }

  return <Button {...props} href={href} LinkComponent={Link}></Button>;
};

const isExternal = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");
