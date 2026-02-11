import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { Description, GitHub } from "@mui/icons-material";

import { LinkButton } from "@/components";

import { Example } from "./example";

export const Hero = () => {
  return (
    <Box bgcolor="black" paddingY={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }} padding={2}>
            <Title />
            <Subtitle />
            <Headline />
            <Box display="flex" gap={1} marginY={1}>
              <Resume />
              <ViewOnGitHub />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={Card}
            variant="outlined"
            minHeight={200}
          >
            <Example />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Title = () => <Typography variant="h1">Sean Johnson</Typography>;

const Subtitle = () => (
  <Typography variant="subtitle1" sx={{ fontSize: 36 }}>
    Principal Software Engineer
  </Typography>
);

const Headline = () => <Typography variant="body1"></Typography>;

const resume = "Resume";

const Resume = () => {
  return (
    <LinkButton
      variant="contained"
      color="info"
      size="large"
      endIcon={<Description />}
      href="/resume"
    >
      {resume}
    </LinkButton>
  );
};

const viewOnGitHub = "View on GitHub";

const ViewOnGitHub = () => {
  return (
    <Button
      variant="outlined"
      color="info"
      size="large"
      href="https://github.com/sjohnsonaz"
      LinkComponent="a"
      target="_blank"
      endIcon={<GitHub />}
    >
      {viewOnGitHub}
    </Button>
  );
};
