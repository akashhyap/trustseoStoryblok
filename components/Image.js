import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
//   console.log(blok);
  let image = blok.image.filename + "/m/";

  return (
    <div className="mt-5 relative w-full max-w-screen-lg lg:w-2/3 md:w-5/6 m-auto mb-10 md:mb-20 md:rounded-2xl overflow-hidden" {...storyblokEditable(blok)}>
      <img
        src={image}
        alt={blok.image.alt}
        className="w-full h-full object-cover duration-700 ease-in-out grayscale-0 blur-0"
      />
    </div>
  );
};

export default Image;
