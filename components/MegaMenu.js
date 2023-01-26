import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MegaMenu = ({ blok }) => {
  //   console.log("blok link", blok);

  const hasSubMenu = blok.submenu.length != 0;

  //   console.log("hasSubMenu", hasSubMenu);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  function handleDropdownClick() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <li className="relative px-2 my-2">
      {!hasSubMenu ? (
        <Link
          href={`/${blok?.link?.cached_url}`}
          {...storyblokEditable(blok)}
          legacyBehavior
        >
          <a
            ref={dropdownRef}
            className="text-base hover:text-gray-900"
            onClick={handleDropdownClick}
          >
            {blok.title}
            {/* {hasSubMenu && (
              <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
            )} */}
          </a>
        </Link>
      ) : (
        <span ref={dropdownRef} onClick={handleDropdownClick} className="cursor-pointer">
          {blok.title} <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
        </span>
      )}

      <ul
        className={`dropdowncontent absolute bg-white rounded-b-lg shadow-md px-2 z-10 ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        {/* {render(blok.submenu)} */}
        {blok?.submenu?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </li>
  );
};
export default MegaMenu;
