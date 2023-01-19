import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Richtextcontent = ({ blok }) => {
  console.log(blok);
  return (
    <div
      className="flex flex-col justify-center text-center w-full md:w-7/12 m-auto text-md md:text-lg text-gray-600 mt-2"
      {...storyblokEditable(blok)}
    >
       <div className="w-10/12 m-auto">{render(blok.content)}</div>
     
     
    </div>
  );
};

export default Richtextcontent;
