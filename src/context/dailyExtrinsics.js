"use client";

import React from "react";

const DailyExtrinsicsContext = React.createContext();

export default DailyExtrinsicsContext;

export const DailyExtrinsicsProvider = ({ data, children }) => {
  return (
    <DailyExtrinsicsContext.Provider value={data}>
      {children}
    </DailyExtrinsicsContext.Provider>
  );
};

export const useDailyExtrinsics = () => {
  return React.useContext(DailyExtrinsicsContext) || [];
};
