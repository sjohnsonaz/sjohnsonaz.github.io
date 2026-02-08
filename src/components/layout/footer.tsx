import { Box, Container, Divider, Grid } from "@mui/material";

import { navigation } from "@/navigation";

import { Copyright } from "./copyright";
import { FooterLinks } from "./footer_links";

export const Footer = () => {
  return (
    <Box>
      <Divider />
      <Box paddingY={2} component={Container}>
        <Content />
      </Box>
    </Box>
  );
};

const Content = () => {
  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Copyright />
      </Grid>
      <Grid
        container
        size={{ xs: 12, md: 8 }}
        component={Box}
        justifyContent="end"
      >
        <FooterLinks links={navigation} />
      </Grid>
    </Grid>
  );
};
