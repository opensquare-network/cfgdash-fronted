"use client";

import React from "react";
import { gql } from "@apollo/client";
import { useApiQuery } from "@/apollo";

const gqlQuery = gql`
  query MyQuery {
    basicData {
      holders {
        all
        whales
        dolphins
      }
      rewards {
        collator
        treasury
      }
      supply {
        total
        wrapped
      }
      treasuryTokens {
        price
        token
        value
      }
    }
  }
`;

const BasicDataContext = React.createContext();

export default BasicDataContext;

export const BasicDataProvider = ({ children }) => {
  const { data, loading } = useApiQuery(gqlQuery);
  return (
    <BasicDataContext.Provider value={{ data: data?.basicData, loading }}>
      {children}
    </BasicDataContext.Provider>
  );
};

export const useBasicData = () => {
  return React.useContext(BasicDataContext) || {};
};
