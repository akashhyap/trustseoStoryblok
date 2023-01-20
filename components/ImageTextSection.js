import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
const ImageTextSection = ({ blok }) => {
  //   console.log("==", blok);
  let image = blok.Image.filename + "/m/";
  let bgColor = (val) => {
    switch (blok.Background_Color) {
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
      {...storyblokEditable(blok)}
      className={`image-text-section py-12 ${bgColor(
        blok.Background_Color
      )}`}
    >
      <div className="flex flex-col w-full md:w-7/12 m-auto text-md md:text-lg">
        <div
          className={`text-center mb-5 ${
            blok.Background_Color === "white" || blok.Background_Color === "grey" || blok.Background_Color === ""
              ? "text-black"
              : "text-white"
          }`}
        >
          {render(blok.Headline)}
        </div>
        <div className="flex flex-col lg:flex-row px-6 lg:px-0">
          <div
            className={`lg:flex-1 order-2 lg:order-1 ${
              blok.Background_Color === "white" || blok.Background_Color === "grey" || blok.Background_Color === ""
                ? "text-black"
                : "text-white"
            }`}
          >
            {render(blok.Content)}
          </div>
          <div className="lg:flex-1 order-1 lg:order-2 mb-10 lg:mb-0 p-7">
            <img
              src={image}
              alt={blok.Image.alt}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;
