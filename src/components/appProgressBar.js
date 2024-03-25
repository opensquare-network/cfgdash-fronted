"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const AppProgressBar = ({ children }) => {
  return (
    <>
      <ProgressBar
        height="2px"
        color="var(--theme500)"
        options={{ showSpinner: false }}
      />
      {children}
    </>
  );
};

export default AppProgressBar;
