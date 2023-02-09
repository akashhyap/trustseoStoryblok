import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const Footer = ({ logo, footer, copyright }) => {
  // console.log("footer", footer);
  return (
    <div className="flex flex-wrap">
      <div className="p-5">
        <Link href="/" legacyBehavior>
          <a>
           TrustSEO
          </a>
        </Link>
      </div>
      <div className="grow grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {footer.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <div className="bg-gray-800 basis-full text-white text-center copyright py-2">{render(copyright)}</div>
    </div>
  );
};

export default Footer;
