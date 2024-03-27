import { gql } from "@apollo/client";

const BASIC_DATA_QUERY = gql`
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

export { BASIC_DATA_QUERY };
