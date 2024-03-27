import apolloClient from ".";
import { DAILY_EXTRINSICS_QUERY } from "./schema/dailyExtrinsics";

export default async function queryDailyExtrinsics() {
  try {
    const { data } = await apolloClient.query({
      query: DAILY_EXTRINSICS_QUERY,
    });

    return data?.dailyExtrinsics;
  } catch (e) {
    return null;
  }
}
