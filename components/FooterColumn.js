import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const FooterColumn = ({ blok }) => {
  //   console.log("footer blok", blok);
  return (
    <div className="p-5">
      <ul className="list-none">
        
          {blok.footerColumn.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
       
      </ul>
    </div>
  );
};

export default FooterColumn;
