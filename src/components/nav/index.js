import Divider from "../divider";
import ChainInfo from "./chainInfo";
import Supply from "./supply";

export default function Nav() {
  return (
    <div className="flex gap-[16px]">
      <div className="flex flex-col px-[24px] gap-[24px] w-[400px]">
        <ChainInfo />
        <Divider />
        <Supply />
      </div>
    </div>
  );
}
