"use client";

import { useState } from "react";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/navigation";

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box width={250}>
          <List>
            {navigation.map((link) => {
              return (
                <ListItem key={link.href} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    selected={isSelected(pathname, link.href)}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText>{link.title}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

function isSelected(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}
