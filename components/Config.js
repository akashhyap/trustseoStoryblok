import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import { useScrollPosition } from "./Hooks";

const Config = ({ blok }) => {
  const buttonUrl = blok?.button?.cached_url;
  const buttonLabel = buttonUrl?.split("-").join(" ");
  // console.log('buttonUrl',buttonUrl.length);

  const [shownav, setShowNav] = useState(false);

  const menuHandler = () => {
    setShowNav(!shownav);
  };

  const ulRef = useRef(null);

  useEffect(() => {
    const lis = ulRef.current.querySelectorAll("a");
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        // console.log(shownav);
        setShowNav(!shownav);
      });
    });
  }, [shownav]);

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`relative bg-white border-b-2 border-gray-100 transition ease-in-out duration-150 ${
        scrollPosition > 0 ? "scrollmenu" : ""
      }`}
      {...storyblokEditable(blok)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start lg:w-0 basis-20 w-[80px]">
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
            className={`menu-drawer fixed md:static top-0 left-0 w-full md:w-auto h-full md:h-auto py-5 md:p-0 ease-linear duration-150 will-change-transform md:will-change-auto bg-white md:bg-transparent translate-x-full md:transform-none ${
              shownav ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              className="md:hidden flex justify-end px-5 pb-5"
              onClick={menuHandler}
            >
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            </div>

            {/* Menu */}
            <ul
              ref={ulRef}
              className="w-full blok md:flex justify-items-end megamenu mb-0"
            >
              {blok?.header_menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </ul>
          </nav>
          {buttonUrl && (
            <div>
              <Link href={`/${buttonUrl}`} legacyBehavior>
                <a className="capitalize border border-logo-red bg-logo-red hover:bg-transparent text-white hover:text-logo-red transition-colors	 font-poppins text-sm px-5 py-3 rounded-full">
                  {buttonLabel}
                </a>
              </Link>
            </div>
          )}
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
