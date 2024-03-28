"use server";

import axios from "axios";

const COIN_ID = {
  centrifuge: "15380",
};

const RANGE = {
  "7d": "7_days.json",
  "1M": "30_days.json",
  "3M": "90_days.json",
  "1Y": "365_days.json",
  All: "max.json",
};

export async function getPrice(range = "7d") {
  let data = {};

  try {
    const resp = await axios(
      `https://www.coingecko.com/price_charts/${COIN_ID.centrifuge}/usd/${RANGE[range]}`,
      {
        timeout: 10000,
      }
    );

    data = resp.data;
  } catch (error) {
    console.error(error);
  }

  return data;
}
