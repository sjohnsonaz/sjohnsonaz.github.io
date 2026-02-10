import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { MDXComponents } from "mdx/types";

import { LinkLink, MdxSyntax, MdxSyntaxPre } from "./components";

const components = {
  h1: ({ children }) => {
    return (
      <Box marginTop={3} marginBottom={1}>
        <Typography variant="h1">{children}</Typography>
        <Divider />
      </Box>
    );
  },
  h2: ({ children }) => {
    return (
      <Box marginTop={3} marginBottom={1}>
        <Typography variant="h2">{children}</Typography>
        <Divider />
      </Box>
    );
  },
  h3: ({ children }) => {
    return (
      <Box marginTop={3} marginBottom={1}>
        <Typography variant="h3">{children}</Typography>
        <Divider />
      </Box>
    );
  },
  h4: ({ children }) => {
    return <Typography variant="h4">{children}</Typography>;
  },
  h5: ({ children }) => {
    return <Typography variant="h5">{children}</Typography>;
  },
  h6: ({ children }) => {
    return <Typography variant="h6">{children}</Typography>;
  },
  hr: ({ children }) => {
    return <Divider>{children}</Divider>;
  },
  p: ({ children }) => {
    return (
      <Box component={Typography} variant="body1" marginBottom={2}>
        {children}
      </Box>
    );
  },
  span: ({ children }) => {
    return (
      <Typography variant="body1" variantMapping={{ inherit: "span" }}>
        {children}
      </Typography>
    );
  },
  a: ({ children, href }) => {
    const external =
      href.startsWith("https://") ||
      href.startsWith("http://") ||
      href.endsWith(".pdf") ||
      false;
    return (
      <LinkLink href={href} target={external ? "_blank" : undefined}>
        {children}
      </LinkLink>
    );
  },
  pre: (props) => {
    return <MdxSyntaxPre {...props} />;
  },
  code: (props) => {
    return <MdxSyntax {...props} />;
  },
  table: ({ children }) => {
    return (
      <TableContainer component={Paper}>
        <Table>{children}</Table>
      </TableContainer>
    );
  },
  thead: ({ children }) => {
    return <TableHead>{children}</TableHead>;
  },
  tbody: ({ children }) => {
    return <TableBody>{children}</TableBody>;
  },
  tr: ({ children }) => {
    return <TableRow>{children}</TableRow>;
  },
  th: ({ children }) => {
    return <TableCell>{children}</TableCell>;
  },
  td: ({ children }) => {
    return <TableCell>{children}</TableCell>;
  },
} as MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
