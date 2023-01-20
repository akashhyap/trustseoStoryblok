import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const MainBlogIntro = ({ blok }) => {
  let date = new Date(blok.date.split(" ")[0]); // Fetching date and excluding time from Storyblok data
  return (
    <div
      className="flex flex-col justify-center text-center w-full my-5 px-6 lg:px-0"
      {...storyblokEditable(blok)}
    >
      <span className="text-sm md:text-base font-light my-5 font-libre">
        {dateFormatter.format(date)}
      </span>
      <div className="w-full md:w-7/12 m-auto font-libre">{render(blok.intro_text)}</div>
    </div>
  );
};

export default MainBlogIntro;
