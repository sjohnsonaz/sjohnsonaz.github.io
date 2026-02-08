import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { HeaderIcons } from "./header_icons";
import { MenuDrawer } from "./menu_drawer";

const title = "Sean Johnson";

export const Header = () => {
  return (
    <Box>
      <AppBar position="fixed" enableColorOnDark>
        <Toolbar>
          <MenuDrawer />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              "& > a": {
                textDecoration: "none",
                color: "inherit",
                "&:visited": {
                  color: "inherit",
                },
                "&:active": {
                  color: "inherit",
                },
              },
            }}
          >
            <Link href="/">{title}</Link>
          </Typography>
          <HeaderIcons />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
