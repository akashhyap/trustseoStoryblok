import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";


export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {story.content.metatags
            ? story.content?.metatags?.title
            : story?.name}
        </title>
      </Head>

      {/* <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header> */}
      <main>
        <StoryblokComponent blok={story.content} />
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";
  let sbParams = {
    version: "draft", // or 'published'
    resolve_links: "url",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get("cdn/stories/config");

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
