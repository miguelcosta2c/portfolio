import { resolveLink, isExternal } from "../lib/links";

/** <a> que resolve atalhos e abre links externos com segurança. */
export default function SmartLink({ link, children, ...props }) {
  const href = resolveLink(link);
  if (!href) return null;

  const external = isExternal(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
