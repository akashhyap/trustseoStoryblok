import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Submenu = ({ blok }) => {
  // console.log("blok", blok);

  return (
    <div className="hs-dropdown relative [--strategy:static] [--adaptive:none]">
      <span className="flex justify-between w-full text-base md:uppercase items-center text-gray-200 py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        {blok?.title}
      </span>
      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:opacity-100 hidden md:block z-10 sm:mt-2 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700 before:absolute before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
        {blok.submenucontent.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};
export default Submenu;
