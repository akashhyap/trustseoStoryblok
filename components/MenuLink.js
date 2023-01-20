import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}) => (
    <Link href={blok.link.cached_url} {...storyblokEditable(blok)} legacyBehavior>
        <a className="text-base hover:text-gray-900">
            {blok.name}
        </a>
    </Link>
)
export default MenuLink