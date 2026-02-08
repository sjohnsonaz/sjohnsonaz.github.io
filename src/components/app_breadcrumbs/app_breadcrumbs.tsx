"use client";

import { Breadcrumbs, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

import { breadcrumb } from "@/navigation";

import { LinkLink } from "../link";

export const AppBreadcrumbs = () => {
  const pathname = usePathname();
  const parts = pathname?.substring(1).split("/") ?? [];

  const items = parts.reduce((items, item) => {
    items.push([...items, item].join("/"));
    return items;
  }, [] as string[]);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkLink underline="hover" color="inherit" href="/">
        Home
      </LinkLink>
      {parts.map((part, index) => {
        const item = items[index];
        if (index === parts.length - 1) {
          return (
            <Typography key={item} sx={{ color: "text.primary" }}>
              {breadcrumb(part)}
            </Typography>
          );
        }
        return (
          <LinkLink
            key={item}
            underline="hover"
            color="inherit"
            href={`/${item}`}
          >
            {breadcrumb(part)}
          </LinkLink>
        );
      })}
    </Breadcrumbs>
  );
};
