import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const MainBlogIntro = ({ blok }) => {
//   console.log(blok);
//   console.log("blok.intro_text", blok.intro_text.content);
  let date = new Date(blok.date.split(" ")[0]); // Fetching date and excluding time from Storyblok data
  return (
    <div
      className="flex flex-col justify-center text-center w-full md:w-7/12 m-auto text-md md:text-lg text-gray-600 mt-2"
      {...storyblokEditable(blok)}
    >
      <span className="text-sm md:text-base font-light text-gray-500 my-5 font-libre">
        {dateFormatter.format(date)}
      </span>
      <div className="w-10/12 m-auto">{render(blok.intro_text)}</div>
     
     
    </div>
  );
};

export default MainBlogIntro;
