"use client";

import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";

const apiClient = new ApolloClient({
  uri: "https://dash-api.odes.io/graphql",
  cache: new InMemoryCache(),
});

export function useApiQuery(query, ...args) {
  return useQuery(query, { client: apiClient }, ...args);
}
