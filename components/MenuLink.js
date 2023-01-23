import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({ blok }) => {
    console.log('blok link', blok.link.cached_url);
  return (
    <Link href={`/${blok.link.cached_url}`} {...storyblokEditable(blok)} legacyBehavior>
      <a className="text-base hover:text-gray-900">{blok.name}</a>
    </Link>
  );
};
export default MenuLink;
