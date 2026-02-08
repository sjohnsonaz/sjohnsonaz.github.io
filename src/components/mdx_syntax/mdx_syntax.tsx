"use client";

import { FC, Fragment, useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useCopyContext } from "..";

export const MdxSyntax: FC<{
  children: string | string[];
  className?: string;
}> = ({ children, className }) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1];

  const text = useMemo(() => {
    return typeof children === "object" ? children.join("\n") : children;
  }, [children]);

  const { setValue } = useCopyContext();

  useEffect(() => {
    setValue(text);
  }, [setValue, text]);

  return language ? (
    <SyntaxHighlighter
      PreTag={PreTag}
      style={{ ...a11yDark }}
      language={language}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <Box
      component="span"
      sx={{ background: grey["900"], color: yellow["A200"] }}
      paddingX={".25em"}
    >
      <code>{children}</code>
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PreTag: FC<{ style: unknown }> = ({ style: _style, ...props }) => {
  return <Fragment {...props} />;
};
