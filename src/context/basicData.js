"use client";

import React from "react";

const BasicDataContext = React.createContext();

export default BasicDataContext;

export const BasicDataProvider = ({ data, children }) => {
  return (
    <BasicDataContext.Provider value={data}>
      {children}
    </BasicDataContext.Provider>
  );
};

export const useBasicData = () => {
  return React.useContext(BasicDataContext) || {};
};
