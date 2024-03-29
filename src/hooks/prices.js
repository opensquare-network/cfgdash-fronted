"use client";

import apolloClient from "@/query";
import { PRICES_GQL } from "@/query/schema/prices";
import { useQuery } from "@apollo/client";
import { useState } from "react";

function parsePricesDataType(price) {
  return {
    price: parseFloat(price.price),
    time: parseFloat(price.time),
  };
}

export function useQueryPrices(range) {
  const [data, setData] = useState({ prices: [] });

  const result = useQuery(PRICES_GQL, {
    client: apolloClient,
    variables: {
      timeRange: range,
    },
    onCompleted(resp) {
      setData({
        prices: resp.prices.map(parsePricesDataType),
      });
    },
  });

  return { ...result, data };
}
