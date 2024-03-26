import CardContainer from "@/components/card/cardContainer";
import ValueSummary from "@/components/card/valueSummary";
import { SystemProposal } from "@/components/icons";
import tw from "tailwind-styled-components";

const Table = tw.table``;

const THead = tw.thead`
  [&_td]:bg-fillBgTableHeader
  [&_td]:text12Semibold
  [&_td]:text-textPrimary
`;

const TBody = tw.tbody``;

const TR = tw.tr`
  [&_td]:text14Regular
`;

const TD = tw.td`
  py-[12px]
  px-[22px]
  border-b
  border-strokeDivider
`;

function Balance({ value, symbol }) {
  return (
    <div className="inline-flex gap-[4px] text14Semibold">
      <span className="text-textPrimary">{value}</span>
      <span className="text-textSecondary">{symbol}</span>
    </div>
  );
}

function ProposalList() {
  return (
    <Table>
      <THead>
        <TD>Proposal</TD>
        <TD></TD>
        <TD className="text-right">Spend</TD>
      </THead>
      <TBody>
        <TR>
          <TD>Error sed quia</TD>
          <TD></TD>
          <TD className="text-right">
            <Balance value="100,000" symbol="CFG" />
          </TD>
        </TR>
        <TR>
          <TD>
            Dolorem non iusto ipsum id placeat illum enim corrupti consequatur
            long
          </TD>
          <TD></TD>
          <TD className="text-right">
            <Balance value="100,000" symbol="CFG" />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
}

export default function ProposalCard() {
  return (
    <CardContainer className="w-[400px] grow" icon={<SystemProposal />}>
      <ValueSummary className="mb-[24px]" title="Treasury" value="Proposals" />
      <ProposalList />
    </CardContainer>
  );
}
