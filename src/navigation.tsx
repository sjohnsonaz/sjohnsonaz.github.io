import {
  AutoStories,
  Home,
  School,
  Terminal,
  TextSnippet,
} from "@mui/icons-material";

export const navigation = [
  { title: "Sean Johnson", href: "/", icon: <Home /> },
  { title: "Resume", href: "/resume", icon: <TextSnippet /> },
  { title: "Masters", href: "/masters", icon: <School /> },
  { title: "Projects", href: "/projects", icon: <Terminal /> },
  { title: "Blog", href: "/blog", icon: <AutoStories /> },
];

export const breadcrumb = (part: string) => {
  return breadcrumbMap[part] ?? part;
};

const breadcrumbMap = navigation.reduce(
  (map, item) => {
    map[item.href.substring(1)] = item.title;
    return map;
  },
  {} as Record<string, string>,
);
