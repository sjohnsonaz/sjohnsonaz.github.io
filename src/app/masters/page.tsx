import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import Masters from "./masters.mdx";

const title = "A Smoothing Algorithm for the Dual Marching Tetrahedra Method";

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
