"use client";

import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import CardContainer from "@/components/card/cardContainer";
import ValueSummary from "@/components/card/valueSummary";
import { SystemProposal } from "@/components/icons";
import BigNumber from "bignumber.js";
import { Link } from "../styled";
import SocialIconLink from "../socialIcon";
import { formatBN } from "@/utils/balance";
import { Amount } from "../card/detailRow";

const Table = tw.table`
  w-full
`;

const THead = tw.thead`
  [&_td]:bg-fillBgTableHeader
  [&_td]:text12Semibold
  [&_td]:text-textPrimary
`;

const TBody = tw.tbody`
  [&_td]:text14Regular
`;

const TR = tw.tr`
`;

const TD = tw.td`
  py-[12px]
  px-[22px]
  border-b
  border-strokeDivider
`;

function ProposalList({ proposals }) {
  return (
    <Table>
      <THead>
        <TR>
          <TD className="min-w-[60px]">Index</TD>
          <TD className="min-w-[230px]">Proposal</TD>
          <TD className="min-w-[80px]"></TD>
          <TD className="text-right">Spend</TD>
        </TR>
      </THead>
      <TBody>
        {proposals?.map((item, index) => {
          const value = new BigNumber(item.value)
            .div(Math.pow(10, 18))
            .toFixed();
          const fiatValue = new BigNumber(item.symbolPrice)
            .plus(value)
            .toFixed();
          return (
            <TR key={index}>
              <TD>
                <Link
                  className="text14Regular"
                  href={`https://centrifuge.subsquare.io/treasury/proposals/${item.proposalIndex}`}
                  target="_blank"
                >
                  #{item.proposalIndex}
                </Link>
              </TD>
              <TD>{item.description}</TD>
              <TD>
                <div className="flex w-full justify-end gap-[8px]">
                  {(item.links || []).map((link, index) => (
                    <SocialIconLink key={index} href={link.link} />
                  ))}
                </div>
              </TD>
              <TD className="text-right">
                <div className="inline-flex flex-col items-end gap-[4px]">
                  <Amount amount={formatBN(value, 3)} unit="CFG" />
                  <span className="text12Regular text-textSecondary">
                    ≈${formatBN(fiatValue, 3)}
                  </span>
                </div>
              </TD>
            </TR>
          );
        })}
      </TBody>
    </Table>
  );
}

function useProposals() {
  const [proposals, setProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://centrifuge-api.dotreasury.com/proposals?page=0&page_size=20")
      .then(async (res) => {
        const data = await res.json();
        setProposals(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    proposals,
    isLoading,
  };
}

export default function ProposalCard() {
  const { proposals, isLoading } = useProposals();

  let content = null;
  if (isLoading) {
    content = <div className="flex justify-center m-[24px]">Loading...</div>;
  } else {
    content = (
      <div className="flex grow overflow-x-scroll scrollbar-hidden mb-[16px]">
        <ProposalList
          proposals={proposals?.items || []}
          isLoading={isLoading}
        />
      </div>
    );
  }

  return (
    <CardContainer className="grow max-sm:w-screen" icon={<SystemProposal />}>
      <ValueSummary className="mb-[24px]" title="Treasury" value="Proposals" />
      <div className="flex flex-col">
        {content}
        <div className="mx-[22px]">
          <Link
            href="https://centrifuge.dotreasury.com/#/proposals"
            target="_blank"
          >
            View All
          </Link>
        </div>
      </div>
    </CardContainer>
  );
}
