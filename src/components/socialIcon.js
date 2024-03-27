import React from "react";
import {
  LinkCoingecko,
  LinkCoinmarketcap,
  LinkDefault,
  LinkDiscord,
  LinkGithub,
  LinkPolkassembly,
  LinkSubscan,
  LinkSubsquare,
  LinkTelegram,
  LinkTwitter,
} from "./icons";

const settings = [
  {
    host: "github.com",
    icon: <LinkGithub />,
  },
  {
    host: "github.io",
    icon: <LinkGithub />,
  },
  {
    host: "polkassembly.io",
    icon: <LinkPolkassembly />,
  },
  {
    host: "twitter.com",
    icon: <LinkTwitter />,
  },
  {
    host: "t.me",
    icon: <LinkTelegram />,
  },
  {
    host: "subsquare.io",
    icon: <LinkSubsquare />,
  },
  {
    host: "subscan.io",
    icon: <LinkSubscan />,
  },
  {
    host: "discord.com",
    icon: <LinkDiscord />,
  },
  {
    host: "coingecko.com",
    icon: <LinkCoingecko />,
  },
  {
    host: "coinmarketcap.com",
    icon: <LinkCoinmarketcap />,
  },
];

function getLinkIcon(link) {
  let url;
  try {
    url = new URL(link);
  } catch (e) {
    return null;
  }

  const item = settings.find((item) => url.host.endsWith(item.host));
  if (item) {
    return item.icon;
  }

  return <LinkDefault />;
}

export function SocialIconLinkWrapper({ href, children }) {
  return (
    <a
      className="cursor-pointer [&_svg]:w-[20px] [&_svg]:h-[20px] [&_svg_path]:fill-textPrimary"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function SocialIconLink({ href }) {
  const icon = getLinkIcon(href);
  return <SocialIconLinkWrapper href={href}>{icon}</SocialIconLinkWrapper>;
}
