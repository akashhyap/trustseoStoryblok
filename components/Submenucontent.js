import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const Submenucontent = ({ blok }) => {
  // console.log("blok link", blok);
  return (
    <li className="leading-7 menuitem">
      <Link
        href={`/${blok.link.cached_url}`}
        {...storyblokEditable(blok)}
        legacyBehavior
      >
        <a>
          {blok?.icon?.filename && (
            <img
              src={blok?.icon?.filename}
              alt="icon"
              className="w-[18px] h-[18px] mr-2"
            />
          )}
          {blok.title}
        </a>
      </Link>
    </li>
  );
};
export default Submenucontent;
