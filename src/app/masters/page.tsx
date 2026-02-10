import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import Masters from "./masters.mdx";

const title = "Master's Thesis";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <div>
        <Masters />
      </div>
    </AppPage>
  );
}
