import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
const Config = ({ blok }) => {
  // console.log("config blok", blok);

  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
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
          <div className="flex-end md:space-x-8">
            {blok?.header_menu.map((nestedBlok) => (
              <StoryblokComponent
                className=""
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Config;
