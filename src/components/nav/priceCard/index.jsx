import { getPrice } from "@/query/coingecko/price";
import PriceCardContent from "./content";

export default async function PriceCard() {
  const data = await getPrice();

  return <PriceCardContent data={data} />;
}
