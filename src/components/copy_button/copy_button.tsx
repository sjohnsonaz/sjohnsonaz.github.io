"use client";

import { useCallback, useEffect, useState } from "react";

import { IconButton, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

import { useCopyContext } from "./copy_context";

const buttonText = "Copy to clipboard";
const copiedText = "Copied!";

export const CopyButton = ({}) => {
  const { copy } = useCopyContext();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  const handleCopy = useCallback(async () => {
    await copy();
    setCopied(true);
  }, [copy]);

  return (
    <Tooltip title={buttonText}>
      <IconButton onClick={handleCopy}>
        <Tooltip title={copiedText} open={copied} placement="top">
          <ContentCopy />
        </Tooltip>
      </IconButton>
    </Tooltip>
  );
};
