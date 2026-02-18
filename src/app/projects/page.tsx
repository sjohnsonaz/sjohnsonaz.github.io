import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import Projects from "./projects.mdx";

const title = "Projects";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <div>
        <Projects />
      </div>
    </AppPage>
  );
}
