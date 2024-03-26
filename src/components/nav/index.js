import Divider from "../divider";
import ChainInfo from "./chainInfo";
import PriceCard from "./priceCard";
import Supply from "./supply";
import ThemeToggle from "./themeToggle";

export default function Nav() {
  return (
    <div className="flex max-sm:flex-col gap-[16px] grow">
      <div className="flex flex-col px-[24px] gap-[24px] w-[400px] max-sm:w-full">
        <ChainInfo />
        <Divider />
        <Supply />
      </div>
      <div className="flex flex-col grow gap-[24px]">
        <div className="flex justify-end mr-[24px] max-sm:hidden">
          <ThemeToggle />
        </div>
        <PriceCard />
      </div>
    </div>
  );
}
