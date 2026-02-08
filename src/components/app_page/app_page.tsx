import { FC, ReactNode } from "react";
import { Box, Container, Divider, Toolbar, Typography } from "@mui/material";

import { AppBreadcrumbs } from "../app_breadcrumbs";

const baseTitle = "Sean Johnson";

export const appTitle = (title: string) => `${title} - ${baseTitle}`;

export const AppPage: FC<{
  children?: ReactNode | ReactNode[];
  title: string;
  subTitle?: string;
}> = ({ children, title, subTitle }) => {
  return (
    <>
      <Box>
        <Toolbar />
      </Box>
      <Box component={Container} paddingY={2}>
        <AppBreadcrumbs />
        <Typography variant="h1">{title}</Typography>
        {subTitle && <Typography variant="h5">{subTitle}</Typography>}
      </Box>
      <Divider />
      <Box
        component={Container}
        display="flex"
        flexDirection="column"
        gap={2}
        marginTop={2}
        marginBottom={4}
      >
        {children}
      </Box>
    </>
  );
};
