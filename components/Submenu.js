import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { useState } from "react";
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
      <p className="menuitem uppercase submenuheading">{blok?.title}</p>
      <ul role="menu" className="submenucontent">
        {blok.submenucontent.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </div>
  );
};
export default Submenu;
