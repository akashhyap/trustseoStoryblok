import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
//   console.log(blok);
  let image = blok.image.filename + "/m/";

  return (
    <div className="mt-5 relative w-full max-w-screen-lg lg:w-2/3 md:w-5/6 m-auto mb-10 md:mb-20 overflow-hidden px-6 lg:px-0" {...storyblokEditable(blok)}>
      <img
        src={image}
        alt={blok.image.alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default Image;
