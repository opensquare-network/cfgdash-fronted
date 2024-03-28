"use client";

import React, { useMemo } from "react";

const DailyExtrinsicsContext = React.createContext();

export default DailyExtrinsicsContext;

export const DailyExtrinsicsProvider = ({ data, children }) => {
  const sortedData = useMemo(
    () => data?.sort((a, b) => a.startTime - b.startTime),
    [data]
  );

  return (
    <DailyExtrinsicsContext.Provider value={sortedData}>
      {children}
    </DailyExtrinsicsContext.Provider>
  );
};

export const useDailyExtrinsics = () => {
  return React.useContext(DailyExtrinsicsContext) || [];
};
