import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const FooterMenu = ({ blok }) => {
  console.log("footer link", blok);
  return (
    <li>
      <Link
        href={`/${blok.link.cached_url}`}
        {...storyblokEditable(blok)}
        legacyBehavior
      >
        <a>{blok.text}</a>
      </Link>
    </li>
  );
};
export default FooterMenu;
