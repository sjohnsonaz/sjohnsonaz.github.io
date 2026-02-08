import { FC } from "react";
import { Box } from "@mui/material";

import { CopyButton, CopyContextProvider } from "..";

export const MdxSyntaxPre: FC<{ children: string | string[] }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        background: "black",
      }}
      margin={0}
      padding={2}
      component="pre"
      position="relative"
    >
      <CopyContextProvider>
        {children}
        <Box position="absolute" top={0} right={0}>
          <CopyButton />
        </Box>
      </CopyContextProvider>
    </Box>
  );
};
