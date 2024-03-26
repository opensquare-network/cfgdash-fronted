import Divider from "../divider";
import { ThemeDark } from "../icons";
import ChainInfo from "./chainInfo";
import PriceCard from "./priceCard";
import Supply from "./supply";

export default function Nav() {
  return (
    <div className="flex gap-[16px] grow">
      <div className="flex flex-col px-[24px] gap-[24px] w-[400px]">
        <ChainInfo />
        <Divider />
        <Supply />
      </div>
      <div className="flex flex-col grow gap-[24px]">
        <div className="flex justify-end mr-[24px] p-[6px]">
          <ThemeDark width="20px" height="20px" />
        </div>
        <PriceCard />
      </div>
    </div>
  );
}
