import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MegaMenu = ({ blok }) => {
  // console.log("blok link", blok);

  const hasSubMenu = blok.submenu.length != 0;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef, setDropdownOpen]);

  function handleDropdownClick(event) {
    setDropdownOpen(dropdownOpen === blok._uid ? null : blok._uid);
  }

  return (
    <li
      role="menuitem"
      aria-haspopup="true"
      aria-expanded="false"
      className={`targetMenu md:px-2 md:my-2 ${
        hasSubMenu && blok._uid === dropdownOpen ? "openmenu" : ""
      }`}
    >
      {!hasSubMenu ? (
        <Link
          href={`/${blok?.link?.cached_url}`}
          {...storyblokEditable(blok)}
          legacyBehavior
        >
          <a
            ref={dropdownRef}
            className="md:hover:text-gray-900 targetmenu px-5 md:px-0"
          >
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
      ) : (
        <span
          ref={dropdownRef}
          onClick={handleDropdownClick}
          className="cursor-pointer menuitem"
        >
          {blok?.icon?.filename && (
            <img
              src={blok?.icon?.filename}
              alt="icon"
              className="w-[18px] h-[18px] mr-2"
            />
          )}
          {blok.title} <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
        </span>
      )}

      {hasSubMenu && (
        <div className="dropdowncontent bg-white md:shadow-md">
          <div
            className="dropdowncontainer md:flex max-w-7xl mx-auto px-0 md:px-6 md:py-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* {render(blok.submenu)} */}
            {blok?.submenu?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      )}
    </li>
  );
};
export default MegaMenu;
