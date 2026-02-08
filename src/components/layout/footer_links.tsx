import { FC } from "react";
import { Box } from "@mui/material";

import { LinkItem } from "./link_item";

export const FooterLinks: FC<{
  links: { href: string; title: string }[];
  columns?: number;
}> = ({ links, columns = 2 }) => (
  <Box
    component="ul"
    padding={0}
    margin={0}
    width="100%"
    sx={{
      columnCount: columns,
    }}
  >
    {links.map(({ href, title }) => (
      <LinkItem href={href} title={title} key={title} />
    ))}
  </Box>
);
