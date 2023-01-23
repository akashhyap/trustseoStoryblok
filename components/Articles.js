import { render } from "storyblok-rich-text-react-renderer";

const Articles = ({ blok }) => {
  return (
    <section className="articles">
      <div className="flex flex-col w-full md:w-7/12 m-auto text-md md:text-lg">
        <h1 className="font-poppins sm:text-5xl text-3xl mb-8">
          {blok.title}
        </h1>
        <img
          className="w-full mb-10 object-cover object-center rounded-2xl"
          alt={blok.image.alt}
          src={blok.image.filename}
        />
        <div className="w-full">
          <div className="mb-8">
            {render(blok.content)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Articles;
