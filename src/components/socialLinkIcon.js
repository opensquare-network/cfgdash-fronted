export default function SocialLinkIcon({ href, children }) {
  return (
    <a
      className="cursor-pointer [&_svg]:w-[20px] [&_svg]:h-[20px]"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
