export default function SocialLinkIcon({ href, children }) {
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
