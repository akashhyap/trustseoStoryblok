import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Submenu = ({ blok }) => {
  // console.log("blok", blok);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  function handleDropdownClick(event) {
    const siblings = event.currentTarget.parentElement.childNodes;
    siblings.forEach((sibling) => {
      if (sibling.classList && sibling.classList.contains("opensubmenu")) {
        sibling.classList.remove("opensubmenu");
      }
    });

    setDropdownOpen(dropdownOpen === blok._uid ? null : blok._uid);
  }

  return (
    <div
      className={`md:basis-1/4 ${
        dropdownOpen === blok._uid ? "opensubmenu" : ""
      }`}
      onClick={handleDropdownClick}
    >
      <p className="menuitem uppercase submenuheading md:pb-2 font-bold">
        <span>{blok?.title}</span>
        <FontAwesomeIcon icon={faCaretDown} className="pl-2 ddcaret" />
      </p>
      <ul role="menu" className="submenucontent">
        {blok.submenucontent.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </div>
  );
};
export default Submenu;
