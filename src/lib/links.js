import { siteData } from "../data/siteData";

/** Converte atalhos (@linkedin, @email, @instagram) em URLs reais. */
export function resolveLink(link) {
  if (!link) return "";
  const { contact, social } = siteData;

  switch (link) {
    case "@email":
      return contact.email ? `mailto:${contact.email}` : "";
    case "@instagram":
      return social.instagram || "";
    case "@linkedin":
      return social.linkedin || "";
    case "@github":
      return social.github || "";
    default:
      return link;
  }
}

export const isExternal = (href) => /^https?:\/\//i.test(href);
