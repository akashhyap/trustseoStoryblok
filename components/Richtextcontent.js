import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Richtextcontent = ({ blok }) => {
  // console.log(blok);
  return (
    <div
      className="flex flex-col justify-center w-full md:w-7/12 m-auto text-md md:text-lg py-14"
      {...storyblokEditable(blok)}
    >
      <div className="w-10/12 m-auto font-libre">{render(blok.content)}</div>
    </div>
  );
};

export default Richtextcontent;
