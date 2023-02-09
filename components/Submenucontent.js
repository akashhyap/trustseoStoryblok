import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const Submenucontent = ({ blok }) => {
  // console.log("blok link", blok);
  return (
    <div className="flex flex-col mx-1 md:mx-0">
      <Link
        href={`/${blok.link.cached_url}`}
        {...storyblokEditable(blok)}
        legacyBehavior
      >
        <a className="group flex gap-x-3 p-2 text-base text-gray-800 hover:bg-gray-50 rounded-md dark:text-gray-200 dark:hover:bg-gray-900">
          <svg
            className="flex-shrink-0 w-6 h-6 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>
          <div className="grow">
            <span className="font-medium text-gray-800 dark:text-gray-200 ">
              {blok.title}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default Submenucontent;
