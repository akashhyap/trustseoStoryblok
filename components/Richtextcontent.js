import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Richtextcontent = ({ blok }) => {
  console.log(blok);
  let bgColor = (val) => {
    switch (blok.backgroundcolor) {
      case "blue":
        return "blue-bg";
        break;
      case "green":
        return "green-bg";
        break;
      case "red":
        return "red-bg";
        break;
      case "grey":
        return "grey-bg";
        break;
      default:
        return "white-bg";
        break;
    }
  };
  return (
    <div
      className={`py-14 px-6 lg:px-0 ${bgColor(
        blok.backgroundcolor
      )}`}
      {...storyblokEditable(blok)}
    >
      <div className="flex flex-col w-full md:w-7/12 m-auto text-md md:text-lg">
        <div
          className={`text-center mb-5 ${
            blok.backgroundcolor === "white" || blok.backgroundcolor === "grey" || blok.backgroundcolor === "" ? "text-black" : "text-white"
          }`}
        >
          {render(blok.headline)}
        </div>
        <div className="flex flex-col lg:flex-row px-6 lg:px-0">
          <div
            className={`lg:flex-1 order-2 lg:order-1 ${
              blok.backgroundcolor === "white" || blok.backgroundcolor === "grey" || blok.backgroundcolor === "" ? "text-black" : "text-white"
            }`}
          >
            {render(blok.content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Richtextcontent;
