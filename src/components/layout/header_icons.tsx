import { GitHub } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export const HeaderIcons = () => {
  return (
    <Box display="flex">
      <IconButton
        LinkComponent="a"
        href="https://github.com/sjohnsonaz"
        target="_blank"
      >
        <GitHub />
      </IconButton>
    </Box>
  );
};
