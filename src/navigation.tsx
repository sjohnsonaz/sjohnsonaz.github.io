import { Build, Home, Info, Lightbulb } from "@mui/icons-material";

export const navigation = [
  { title: "Sean Johnson", href: "/", icon: <Home /> },
  { title: "About me", href: "/about" },
  { title: "Blog", href: "/blog" },
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
