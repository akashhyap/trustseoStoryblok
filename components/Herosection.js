import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ImageTextSection = ({ blok }) => {
  let image = blok.image.filename + "/m/";
  let hasImage = blok.image.filename != "";
  console.log("html", blok);

  let htmlContent = "";
  blok.text.content.forEach((obj) => {
    if (obj.type === "code_block") {
      htmlContent += obj.content[0].text;
    }
  });
  return (
    <div {...storyblokEditable(blok)} className="herosection pt-12 pb-0">
      <div className="flex w-full md:w-7/12 m-auto text-md md:text-lg">
        <div className="flex flex-col lg:flex-row pt-6 lg:px-0 w-full items-center">
          <div className="lg:flex-1 order-2 lg:order-1">
            <div
              className="mb-8 md:my-8"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
            <Link href={`/${blok?.button?.cached_url}`} legacyBehavior>
              <a className="text-[17px] lg:text-[19px] inline-flex items-center text-left bg-transparent transition-all duration-150 hover:bg-slate-800 text-white-700 hover:text-white py-4 px-2 lg:px-4 border border-white-500 hover:border-transparent rounded mb-5">
                {blok.button_label}
                <span className="ml-2">
                  <FontAwesomeIcon icon={FaArrowRight} className="pl-2" />
                </span>
              </a>
            </Link>
          </div>
          {hasImage && (
            <div className="lg:flex-1 order-1 lg:order-2 mb-10 lg:mb-0 hidden lg:block">
              <img
                src={image}
                alt={blok.image.alt}
                className="w-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;
