import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
const Config = ({ blok }) => {
//  console.log(blok);
 const buttonUrl = blok?.button?.cached_url;
 const buttonLabel = buttonUrl?.split('-').join(' ')
  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start lg:w-0 basis-20">
            <Link href="/" legacyBehavior>
              <a>
                <img
                  src={blok?.logo.filename}
                  alt="TrustSEO"
                  className="w-full h-full object-cover"
                />
              </a>
            </Link>
          </div>
          <div>
            <ul className="w-full flex justify-items-end megamenu mb-0">
              {blok?.header_menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </ul>
          </div>
          <div>
          <Link href={`/${buttonUrl}`} legacyBehavior>
              <a className="capitalize border border-logo-red bg-logo-red hover:bg-transparent text-white hover:text-logo-red transition-colors	 font-poppins text-sm px-5 py-3 rounded-full">
                {buttonLabel}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Config;
