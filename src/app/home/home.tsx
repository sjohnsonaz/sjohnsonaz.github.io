import { Box, Container, Toolbar } from "@mui/material";

import { Hero } from "./hero";

export function Home() {
  return (
    <>
      <Box sx={{ background: "#000" }}>
        <Toolbar />
      </Box>
      <Hero />
      <Box component={Container} marginY={4}></Box>
    </>
  );
}
