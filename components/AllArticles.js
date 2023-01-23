import ArticleTeaser from "./ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { useState, useEffect } from "react";

const AllArticles = ({ blok }) => {
  // console.log('blok', blok);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        starts_with: "blog/",
      });
      setArticles(data.stories);
    };
    getArticles();
  }, []);
  return (
    <div className="w-full max-w-6xl m-auto">
      <h1 className="sm:text-5xl text-3xl">{blok.title}</h1>
      <div
        className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3"
        {...storyblokEditable(blok)}
      >
        {articles[0] &&
          articles.map((article) => {
            return (
              <ArticleTeaser
                article={article.content}
                slug={article.slug}
                key={article.uuid}
              />
            );
          })}
      </div>
    </div>
  );
};
export default AllArticles;
