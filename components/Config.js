import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";

import Link from "next/link";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Config = ({ blok }) => {
  //  console.log(blok);
  const buttonUrl = blok?.button?.cached_url;
  const buttonLabel = buttonUrl?.split("-").join(" ");

  const [shownav, setShowNav] = useState(false);

  const menuHandler = (event) => {
    setShowNav(!shownav);
  };

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
          <nav
            role="menu"
            className={`fixed md:relative top-0 left-0 w-full md:w-auto h-full md:h-auto p-5 md:p-0 ease-linear duration-150 will-change-transform md:will-change-auto bg-slate-900 md:bg-transparent translate-x-full md:transform-none ${
              shownav ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              className="md:hidden flex justify-end"
              onClick={menuHandler}
            >
              <FontAwesomeIcon icon={faXmark} className="text-white text-2xl" />
            </div>
            <ul className="w-full blok md:flex justify-items-end megamenu mb-0">
              {blok?.header_menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </ul>
          </nav>
          <div>
            <Link href={`/${buttonUrl}`} legacyBehavior>
              <a className="capitalize border border-logo-red bg-logo-red hover:bg-transparent text-white hover:text-logo-red transition-colors	 font-poppins text-sm px-5 py-3 rounded-full">
                {buttonLabel}
              </a>
            </Link>
          </div>
          {/* Toggle Menu Icon */}
          <span className="md:hidden toggle_icon" onClick={menuHandler}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Config;
