import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const ArticleTeaser = ({ article, slug }) => {
  console.log("article content", article);
  const isPageComponent = article.component == "page";

  return (
    <>
      {!isPageComponent && (
        <div className="column feature">
          <figure className="mb-2 lg:h-60 md:h-48">
            <Link href={`/blog/${slug}`} legacyBehavior>
              <a>
                <img
                  className="object-cover w-full h-full rounded-xl"
                  src={article?.image.filename}
                  alt="blog"
                />
              </a>
            </Link>
          </figure>
          <h2 className="font-poppins mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl">
            <Link href={`/blog/${slug}`} legacyBehavior>
              <a>{article.title}</a>
            </Link>
          </h2>
          <div className="mx-auto text-base leading-relaxed">
            <p className="pb-0">{article.excerpt}</p>
          </div>
          <div className="mt-2">
            <Link href={`/blog/${slug}`} legacyBehavior>
              <a
                className="inline-flex items-center mt-4 lg:mb-0 hover:text-neutral-600 underline underline-offset-4"
                title="read more"
              >
                Read More »
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default ArticleTeaser;
