import DetailRow from "../card/detailRow";
import TokenSummary from "../card/tokenSummary";

function TotalSupply() {
  return <TokenSummary title="Total supply" value="527,747,979" />;
}

export default function Supply() {
  return (
    <>
      <TotalSupply />
      <div className="flex flex-col">
        <DetailRow title="Native CFG" amount="1,000,000" symbol="CFG" />
        <DetailRow title="Wrapped CFG" amount="1,000,000" symbol="CFG" />
      </div>
    </>
  );
}
