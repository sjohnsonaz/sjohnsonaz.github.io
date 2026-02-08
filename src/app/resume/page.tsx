import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import Resume from "./resume.mdx";

const title = "Sean Johnson";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <div>
        <Resume />
      </div>
    </AppPage>
  );
}
